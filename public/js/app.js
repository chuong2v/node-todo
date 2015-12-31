var app = angular.module('app', ['todo.controllers', 'list.controllers']);

app.config(function($interpolateProvider) {
  sessionStorage.setItem('currentList', "Inbox");
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('appController', function($scope) {
  // $scope.currentList = 
})

app.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if (event.keyCode === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
});

app.filter('listFilter', function() {
  return function(input, list) {
    if (list) {      
      var out = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].listId == list._id) {
          out.push(input[i]);
        }
      }
      return out;
    }
    return input;
  }
})