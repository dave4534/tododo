var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var Task = require('./taskSchema');
mongoose.connect('mongodb://localhost/tasks');

app.post('/todo', function(req, res){
  
  var newTask = new Task(req.body);

  newTask.save(function(err, taskFromDB){
    if(err){return next(err);}
    res.send(taskFromDB);
  });
});

app.get('/todo', function(req, res){
  Task.find(function(error, tasks){
    res.send(tasks);
  });
});

app.listen(3000);