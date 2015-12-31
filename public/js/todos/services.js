angular.module('todo.services', [])
.factory("Todos", function($http) {
  return {
    get: function() {
      return $http.get('http://localhost:3000/api/todos');
    },
    put: function(item) {
      $http.put('http://localhost:3000/api/todos/' + item._id, item);
    },
    post: function(item) {
      $http.post('http://localhost:3000/api/todos', item);
    },
    delete: function(item) {
      $http.delete('http://localhost:3000/api/todos/' + item._id);
    }
  }
});