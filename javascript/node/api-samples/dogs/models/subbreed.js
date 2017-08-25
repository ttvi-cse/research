var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subBreedSchema = new Schema({
    name: String,
    images: []
})

var SubBreed = mongoose.model('SubBreed', subBreedSchema);

module.exports = SubBreed;