'use strict';

/**
 * @ngdoc overview
 * @name uibaccountsApp
 * @description
 * # uibaccountsApp
 *
 * Main module of the application.
 */
angular
  .module('uibaccountsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about/:bruker/:passord', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tips', {
        templateUrl: 'views/tips.html',
        controller: 'TipsCtrl'
      })
      .when('/har', {
        templateUrl: 'views/har.html',
        controller: 'HarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
