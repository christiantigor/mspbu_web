'use strict';

angular.module('bpmigasApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.calendar',
  'leaflet-directive',
  'ngTable'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/listspbu', {
        templateUrl: 'views/listspbu.html',
        controller: 'ListspbuCtrl'
      })
      .when('/spbu', {
        templateUrl: 'views/spbu.html',
        controller: 'SpbuCtrl'
      })
      .when('/sandbox', {
        templateUrl: 'views/sandbox.html',
        controller: 'SandboxCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
