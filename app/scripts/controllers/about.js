'use strict';

/**
* @ngdoc function
* @name uibaccountsApp.controller:AboutCtrl
* @description
* # AboutCtrl
* Controller of the uibaccountsApp
*/
angular.module('uibaccountsApp')
.controller('AboutCtrl', function ($scope, $routeParams, $firebase) {
var param1 = $routeParams.bruker;
var param2 = $routeParams.passord;
  var accountsRef = new Firebase('https://uibaccountstest.firebaseio.com/user');

$scope.account = {};
$scope.account.userName = param1;
$scope.account.password = param2;
$scope.account.newPassword = '';
});
