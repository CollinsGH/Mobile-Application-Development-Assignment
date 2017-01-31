angular.module('starter.controllers', [])

.controller('oneCtrl', function($scope, Task) {
    $scope.data = Task.data;
}) //display all tasks

.controller('twoCtrl', function($scope, Task) {
    var data = {
    newTask: "",
         newDetail: ""
  };
  
  function addTask() {
    Task.addTask(data.newTask, data.newDetail);
      //call add task function
    data.newTask = "";
    data.newDetail = "";
    //reset values in box to nothing
  }
  
  $scope.data = data;
  $scope.addTask = addTask;
})

.controller('threeCtrl', function($scope, Task) {
    $scope.data = Task.data;
    //display
    $scope.remove= function(id){
        Task.removeTask(id);
    } //call remove task function
});
