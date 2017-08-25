var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var breedSchema = new Schema({
    name: String,
    images: [],
    subBreeds: []
})

var Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;