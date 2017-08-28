var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');

var Breed = require('../models/breed');
var SubBreed = require('../models/subbreed');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('api page');
});

router.get('/breeds/list/all', function(req, res, next) {
  Breed.find({}, function(err, data) {
    if (err) next(err);

    var mesage = {};
    for (var i = 0; i < data.length; i++) {
      mesage[data[i].name] = data[i].subBreeds.map(a => a.name);
    }
    var response = {
      status: 'success',
      message: mesage
    }
    res.json(response);
  });
})

router.get('/image/random', function(req, res, next) {
  Breed.find({}, function(err, data) {
    if (err) next(err);

    var arr = [];
    for (var i = 0; i < data.length; i++) {
      arr.push(...data[i].images);
    }
    var response = {
      status: 'success',
      message: arr[Math.floor(Math.random()*arr.length)]
    }
    res.json(response);
  });
})

router.get('/breeds/list', function(req, res, next) {
  Breed.find({}, 'name images', function(err, data) {
    if (err) res.next(err);
    var response = {
      status: 'success',
      message: data.map(a => a.name)
    }
    res.json(response);
  })
})

router.post('/breed/:breed/images', function(req, res, next) {
  request('https://dog.ceo/api/breed/'+ req.params.breed +'/images', function(error, response, body) {
    if (error) console.log('error load api from dog\s api');
    
    var images = JSON.parse(body).message;

    Breed.findOneAndUpdate({name: req.params.breed}, {images: images}, function(err, doc) {
      if (err) next(err);

      var response = {
        status: 'success',
        message: doc.name + '\'s images updated'
      }
      res.json(response);
    })
  })
});

router.get('/breed/:breed/images', function(req, res, next) {
  Breed.findOne({name: req.params.breed}, 'images', function(err, data) {
    if (err) res.next(err);
    var response = {
      status: 'success',
      message: data.images
    }
    res.json(response);
  });
})

router.get('/breed/:breed/images/random', function(req, res, next) {
  Breed.findOne({name: req.params.breed}, function(err, data) {
    if (err) next(err);

    var rand = Math.floor(Math.random()*data.images.length);
    var response = {
      status : 'success',
      mesage : data.images[rand]
    }
    res.json(response);
  });
})

router.post('/breed/:breed/list', function(req, res, next) {
  request('https://dog.ceo/api/breed/'+ req.params.breed +'/list', function(error, response, body) {
    if (error) {
      console.log('error load api from dog\'s subbreed list');
      next(error);
    }

    var subBreeds = JSON.parse(body).message;

    Breed.findOne({name: req.params.breed}, function(err, doc) {
      if (err) next(err);
      doc.subBreeds = [];
      for (var i = 0; i < subBreeds.length; i++) {
        doc.subBreeds.push({name: subBreeds[i], images: []})
      }
      doc.save(function(err, doc) {
        if (err) next(err);

        var response = {
          status: 'success',
          message: doc.name + '\'s subbreeds updated'
        };
        res.json(response);
      })
    })
  })
})

router.get('/breed/:breed/list', function(req, res, next) {
  Breed.findOne({name: req.params.breed}, function(err, doc) {
    if (err) next(err);

    var response = {
      status: 'success',
      message: doc.subBreeds
    }
    res.json(response);
  })
})

router.post('/breed/:breed/:subbreed/images', function(req, res, next) {
  request('https://dog.ceo/api/breed/'+ req.params.breed + '/' + req.params.subbreed +'/images', function(error, response, body) {
    if (error) {
      console.log('error load api from dog\'s subbreed image');
      next(error);
    }

    var images = JSON.parse(body).message;
    Breed.findOne({name: req.params.breed}, function(err, data) {
      if (err) next(err);

      for (var i = 0; i < data.subBreeds.length; i++) {
        if (data.subBreeds[i].name == req.params.subbreed) {
          data.subBreeds[i].images = images;
          break;
        }
      }
      data.save(function(err, data) {
        if (err) next(err);

        var response = {
          status: 'success',
          message: data.name + '\'s subbreed\'s images updated'
        }
        res.json(response);
      })
    })
  })
})

router.get('/breed/:breed/:subbreed/images', function(req, res, next) {
  Breed.findOne({name: req.params.breed}, function(err, data) {
    if (err) next(err);

    var message = [];
    for (var i = 0; i < data.subBreeds.length; i++) {
      if (data.subBreeds[i].name == req.params.subbreed) {
        message = data.subBreeds[i].images;
        break;
      }
    }

    var response = {
      status: 'success',
      message: message
    }
    res.json(response);
  })
})

router.get('/breed/:breed/:subbreed/images/random', function(req, res, next) {
  Breed.findOne({name: req.params.breed}, function(err, data) {
    if (err) next(err);

    var arr = [];
    for (var i = 0; i < data.subBreeds.length; i++) {
      if (data.subBreeds[i].name == req.params.subbreed) {
        arr = data.subBreeds[i].images;
        break;
      }
    }
    var response = {
      status: 'message',
      message: arr[Math.floor(Math.random()*arr.length)]
    }
    res.json(response);
  })
})

module.exports = router;
