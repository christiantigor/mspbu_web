'use strict';

/**
 * @ngdoc overview
 * @name mspbuApp
 * @description
 * # mspbuApp
 *
 * Main module of the application.
 */
angular
  .module('mspbuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($httpProvider) {
	$httpProvider.defaults.transformRequest = function(data){
	  if (data === undefined) {
	    return data;
	  }
	  return $.param(data);
	}
  });
