angular.module('list.services', [])
  .service("Lists", function($http) {  
    this.currentList={
      name: "Inbox",
      _id: null
    };
    this.lists={};
    return {
      get: function() {
        return $http.get('http://localhost:3000/api/lists');
      },
      put: function(item) {
        $http.put('http://localhost:3000/api/lists/' + item._id, item);
      },
      post: function(item) {
        $http.post('http://localhost:3000/api/lists', item);
      },
      currentList: this.currentList,
      delete: function(item) {
        $http.delete('http://localhost:3000/api/lists/' + item._id);
      },
      lists: this.lists
    };
  })