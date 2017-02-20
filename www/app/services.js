var data = angular.module('app.data', []);

var gitApiUrl = 'https://api.github.com/users/';

data.factory('userService', ['$http', '$q', function ($http, $q) {
  	return {
    	getUserData: function(username) {
   		return $http.get(gitApiUrl + username).then(
            function (response) {
   				return response.data;
   			}, function (error) {
   				return $q.reject(error);
   			}
   		);
    	}
  	}
}]);

data.factory('repoService', ['$http', '$q', function ($http, $q) {
	return {
		getRepoData: function(username) {
			return $http.get(gitApiUrl + username + "/repos").then(
            function (response) {
      			return response.data;
      		}, function (error) {
      			return $q.reject(error);
      		}
      	);
		}
	}
}]);