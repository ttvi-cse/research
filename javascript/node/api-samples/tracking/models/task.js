const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var taskSchema = new Schema({
    name: { type: String },
    created: {type: Date}
})

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;