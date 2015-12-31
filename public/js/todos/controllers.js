angular.module('todo.controllers', ['todo.services', 'list.services'])
  .controller("TodoController", function($scope, $http, Todos, Lists) {
    $scope.hideButton = "Show completed to-dos";

    $scope.currentList = Lists.currentList;
    
    $scope.todoList = [];

    this.showCompleted = false;

    Todos.get().success(function(data) {
      $scope.todoList = angular.fromJson(data);
    });

    this.setEditable = function(item) {
      var index = $scope.todoList.indexOf(item);
      for (var i = $scope.todoList.length - 1; i >= 0; i--) {
        if (i !== index)
          $scope.todoList[i].editable = false;
      };
      if (item.editable === false) {
        item.editable = true;
      } else if (item.editable === true && item.title != "") {
        item.editable = false;
      }
      this.update(item);
    }

    this.addTodo = function() {
      if ($scope.newTask != undefined && $scope.newTask != null && $scope.newTask != "") {
        
        var item = {
          title: $scope.newTask,
          done: false,
          editable: false,
          listId: $scope.currentList._id
        };

        $scope.todoList.unshift(item);
        Todos.post(item);
        Todos.get().success(function(data) {
          $scope.todoList = angular.fromJson(data);
        });
        $scope.newTask = null;
      }
    };

    this.update = function(item) {
      Todos.put(item);
    }

    this.removeTodo = function(item) {
      var index = $scope.todoList.indexOf(item);
      if (index > -1) {
        // if(!item.done)
        // $scope.todosCount--;
        $scope.todoList.splice(index, 1);
        Todos.delete(item);
      }
    }

    this.showHideCompleted = function() {
      if (this.showCompleted)
        $scope.hideButton = "Show completed to-dos"
      else
        $scope.hideButton = "Hide completed to-dos"
      this.showCompleted = !this.showCompleted;
    }
  });