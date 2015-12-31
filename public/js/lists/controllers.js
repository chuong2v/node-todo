angular.module('list.controllers', ['list.services'])
  .controller('ListController', function($scope, Lists) {
    Lists.get().success(function(data) {
      $scope.lists = angular.fromJson(data);
      Lists.lists = $scope.lists;
    });

    $scope.currentList = Lists.currentList;
    var lists = Lists.lists;
    for (var i = 0; i < lists.length; i++) {
      if (lists[i].name == $scope.currentList.name) {
        $scope.currentList._id = lists[i]._id;
        break;
      }
    }

    $scope.setCurrentList = function(name) {
      $scope.currentList.name = name;
      Lists.get().success(function(data) {
        $scope.lists = angular.fromJson(data);
        Lists.lists = $scope.lists;
        var lists = Lists.lists;
        for (var i = 0; i < lists.length; i++) {
          if (lists[i].name == $scope.currentList.name) {
            $scope.currentList._id = lists[i]._id;
            break;
          }
        }
      });

    }

    $scope.newList = function(list) {
      $scope.lists.unshift(list);
      Lists.post(list);
      Lists.get().success(function(data) {
        $scope.lists = angular.fromJson(data);
      });
      // list.name = undefined;
    }

    $scope.delete = function(list) {
      // alert('here');
      Lists.delete(list);
      Lists.get().success(function(data) {
        $scope.lists = angular.fromJson(data);
        Lists.lists = $scope.lists;
      });
    }
  })