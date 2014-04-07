"use strict";

var App = angular.module("todo",[]);

App.controller("TodoCtrl",function  ($scope) {
	$scope.init = function() {
		$scope.show = "All";
	}
	$scope.todos = [
		{ task: "Learn AngularJS", done: false },
		{ task: "Catch up on House of Cards", done: false },
		{ task: "Write more to-do items", done: false }
		];

	$scope.addTodo = function() {
		$scope.todos.push({task: $scope.newTodo, done: false });
		$scope.newTodo = ""; // reset text field
	};

	$scope.deleteTodo = function(index) {
		
		$scope.todos.splice(index, 1);
	};

	$scope.showFn = function(todo) {
		if($scope.show==="All") {
			return true;
		} else if (todo.done && $scope.show === "Complete") {
			return true;
		} else if (!todo.done && $scope.show === "Incomplete") {
			return true;
		} else {
			return false;
		}
	};
});

App.directive("ngEnter", function() {
	return function(scope, element) {
		$(element).keyup(function(e) {
			if (e.keyCode === 13) {
				scope.$apply(function() {
					scope.addTodo();
				});
			}
		});
	};
});