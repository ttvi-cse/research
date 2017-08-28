var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var breedSchema = new Schema({
    name: String,
    images: [],
    subBreeds: [{name: String, images: []}]
})

var Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;