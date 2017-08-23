var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
})

var subBreedSchema = new Schema({
    name: String,
    images: []
})

var breedSchema = new Schema({
    name: String,
    subBreeds: [subBreedSchema],
    images: []
});

var Breed = mongoose.model('Breed', breedSchema);

var SubBreed = mongoose.model('SubBreed', subBreedSchema);

// create and save data
var subBreed = new SubBreed({name: 'test', images: ['testimage', 'testimage']});
subBreed.save(function(err) {
    if (err) console.log('err save subbreed');
    console.log('subbreed saved');
});

var breed = new Breed({name: 'test', subBreeds: [subBreed], images: ['testimage', 'testimage']});
breed.save(function(err) {
    if (err) console.log('err');
    console.log('saved');
})


// http get sample
var http = require('http');
var options = {
    host: 'https://dog.ceo/api/breeds/list/all',
    port: 443
}

var req = http.get(options, function(res) {
    console.log('STATUS:' + res.statusCode());
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    var bodyChunks = [];
    res.on('data', function(chunk) {
        bodyChunks.push(chunk);
    })
    .on('end', function() {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
    });
})

req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
})


// application config
var app = express();

app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(3000);