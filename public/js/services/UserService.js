angular.module('UserService', []).factory('User', ['$http', function($http) {

	return $http.get('localhost:8080/users') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);