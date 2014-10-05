'use strict';

/**
* @ngdoc function
* @name uibaccountsApp.controller:ClickedCtrl
* @description
* # ClickedCtrl
* Controller of the uibaccountsApp
*/
angular.module('uibaccountsApp')
    .service('ClickedCtrl', function () {
        var click = false;

        return {
            getClicked: function () {
                return click;
            },
            setClicked: function() {
                click = true;
            }
        };
    });
