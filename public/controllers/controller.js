app.controller('controller', function($scope, taskService){

$scope.tasks = taskService.tasks;

$scope.addTask = function(){
  taskService.addTask($scope.input);
  taskService.getAll();
};

taskService.getAll().then(function(){
  $scope.tasks = taskService.tasks;
});

});