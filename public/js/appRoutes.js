(function() {
  'use strict';

  var module = angular.module('appRoutes', ['ui.router']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function appConfig($stateProvider,$urlRouterProvider) {
     $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersController'
      }).state('users.table', {
        url: '/table',
        templateUrl: 'views/users.table.html',
        controller: 'UsersController'
      }).state('users.grid', {
        url: '/grid',
        templateUrl: 'views/users.grid.html',
        controller: 'UsersController'
      }).state('users.list', {
        url: '/list',
        templateUrl: 'views/users.list.html',
        controller: 'UsersController'
      });

  }

  module.run(['$state',function($state){}]);
})();


// angular.module('appRoutes', ['ui.router'])
// 	.config(['$routeProvider', '$locationProvider','$stateProvider', function($routeProvider, $locationProvider,$stateProvider) {

// 	$routeProvider
// 		.otherwise('/', {
// 			templateUrl: 'views/home.html',
// 		});
// 	$stateProvider
//       .state('users', {
//         url: '/users',
//         templateUrl: 'views/users.html',
//         controller: 'UserController'
//       }).state('users.table', {
//         url: '/table',
//         templateUrl: 'views/table.html',
//         controller: 'UserController'
//       }).state('users.grid', {
//         url: '/grid',
//         templateUrl: 'views/grid.html',
//         controller: 'UserController'
//       }).state('users.list', {
//         url: '/list',
//         templateUrl: 'views/list.html',
//         controller: 'UserController'
//       });


// }]);