'use strict';

var movieTrakApp = angular.module('movieTrakApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
