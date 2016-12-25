app.factory('taskService', function($http){
// var input = this.input;

var todo = {
  tasks: [],
  addTask: function(input){
    console.log(this);
    $http.post('/todo', {input: input})
    .then(function(res){
       console.log(res.data);
       
    });
  },
  getAll: function(){
    return $http.get('/todo').then(function(data){
      angular.copy(data.data, todo.tasks);
    });
  }
};

return todo;

});

