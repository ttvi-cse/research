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
  res.send('GET /breeds/list/all')
})

router.get('/image/random', function(req, res, next) {
  res.send('GET /image/random')
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
  res.send('GET /breed/'+ req.params.breed + '/images/random')
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

      doc.subBreeds = subBreeds;
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

router.get('/breed/:breed/:subbreed/images', function(req, res, next) {
  res.send('GET /breed/'+ req.params.breed + '/' + req.params.subbreed + '/images')
})

router.get('/breed/:breed/:subbreed/images/random', function(req, res, next) {
  res.send('GET /breed/'+ req.params.breed + '/' + req.params.subbreed + '/images/random')
})

module.exports = router;
