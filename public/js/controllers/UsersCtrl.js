angular.module('UsersCtrl', []).controller('UsersController',['$scope','User', function($scope,User) {

	User.success(function(data){
		 console.log(data);
    	 $scope.users = data.data;
  })
}])
	.factory('User', ['$http', function($http) {

	return $http.get('http://localhost:8080/users') 
            .success(function(data) { 

              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);