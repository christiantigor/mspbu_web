'use strict';

var frontendApp = angular.module('frontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'ui.bootstrap',
  'wu.masonry', 
  'd3',
  'ngTable',
  'ui.router'
])

  frontendApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
      
    $stateProvider
      .state('login', {
          url: "/login",
          templateUrl: "views/login.html",
          controller: 'LoginCtrl'
      })
      .state('dashboard', {
          url: "/dashboard",
          templateUrl: "views/main.html",
          controller: 'MainCtrl'
      })
      .state('location', {
          url: "/location",
          templateUrl: "views/location.html",
          controller: 'LocationCtrl'
      })
      .state('list', {
          url: "/list",
          templateUrl: "views/list.html",
          controller: 'ListCtrl'
      })
      .state('spbu', {
          url: "/spbu",
          templateUrl: "views/spbu.html",
          controller: 'SpbuCtrl'
      })
      .state('transaction', {
          url: "/transaction",
          templateUrl: "views/transaction.html",
          controller: 'TransactionCtrl'
      })
      .state('tracking', {
          url: "/tracking",
          templateUrl: "views/tracking.html",
          controller: 'TrackingCtrl'
      })
      .state('dispencer', {
          url: "/dispencer",
          templateUrl: "views/dispencer.html",
          controller: 'DispencerCtrl'
      })
      .state('lo', {
          url: "/lo",
          templateUrl: "views/lo.html",
          controller: 'LoCtrl'
      })
      .state('stock', {
          url: "/stock",
          templateUrl: "views/stock.html",
          controller: 'StockCtrl'
      })
      .state('spp', {
          url: "/spp",
          templateUrl: "views/spp.html",
          controller: 'SppCtrl'
      })

    })

  // setup dependency injection
  angular.module('d3', []);
  angular.module('frontendApp.directives', ['d3']);

