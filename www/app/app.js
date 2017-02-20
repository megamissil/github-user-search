//Main Module
var app = angular.module('app', ['app.data']);

app.controller('UserCtrl', ['$scope', 'userService', 'repoService', function ($scope, userService, repoService) {
	
	$scope.getUser = function() {
		userService.getUserData($scope.username).then(
			function(data) {
				$scope.user = data;
			}
		),
		repoService.getRepoData($scope.username).then(
			function(data) {
				$scope.repos = data;
			}
		);
	};
}]);