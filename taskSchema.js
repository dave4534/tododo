var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  input: String
});

var newTask = mongoose.model('Tasks', taskSchema);
module.exports = newTask;