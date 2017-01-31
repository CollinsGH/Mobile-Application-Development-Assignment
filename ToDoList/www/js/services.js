angular.module('starter.services', [])

.factory('Task', function() {
  /*Code based of the example: solution-factory,
    -Added in the detail variable to the data
    -Added in a fuction to remove a task*/
 var data = {
    tasks: [ 
      {title: "Buy groceries", details:"Milk, Eggs, Dog Shampoo", added: new Date()}
      , {title: "Clean dog", details:"Use new shampoo",added: new Date()}
    ]
  };
  //add task function using push method 
  function addTask(title,details) {
    data.tasks.push({title: title, details: details, added: new Date()});
  }
  //add task function using push method 
  function removeTask(id) {
    data.tasks.splice(data.tasks.indexOf(id), 1);
  }
  //return values
  return {
    data: data
    , addTask: addTask
      , removeTask: removeTask
  };
});