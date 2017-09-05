var mongoose = require('mongoose');
var Schema = mongoose.Schema

var tagSchema = new Schema({
    name: String,
    task_id: {type:Schema.Types.ObjectId, ref: 'Task'}
})

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;


