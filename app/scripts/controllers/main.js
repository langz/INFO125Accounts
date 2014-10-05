'use strict';


angular.module('uibaccountsApp')
.controller('MainCtrl', [ '$scope', '$firebase', '$location', 'ClickedCtrl', function ($scope, $firebase, $location, ClickedCtrl) {

  var accountsRef = new Firebase('https://uibaccountstest.firebaseio.com/user');

  $scope.accounts = $firebase(accountsRef);

  $scope.account =  {};


  $scope.insertData = [
  { 'taken': false, 'user' : 'INFO125_H14_STUD1', 'password' : 'cferkar61'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD2', 'password' : 'cgertar12'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD3', 'password' : 'ckolred93'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD4', 'password' : 'cklator54'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD5', 'password' : 'cnytfer85'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD6', 'password' : 'clopder76'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD7', 'password' : 'cjulmes67'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD8', 'password' : 'ckjstiu58'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD9', 'password' : 'clirtre29'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD10', 'password' : 'cvarkir10'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD11', 'password' : 'ckedpow11'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD12', 'password' : 'cgredil12'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD13', 'password' : 'ckerdik13'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD14', 'password' : 'ctorman14'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD15', 'password' : 'cperlip15'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD16', 'password' : 'cjagson16'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD17', 'password' : 'ckirner17'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD18', 'password' : 'crombad18'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD19', 'password' : 'clarkol19'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD20', 'password' : 'cgriria20'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD21', 'password' : 'cmarnad21'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD22', 'password' : 'ckurfel22'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD23', 'password' : 'ckantre23'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD24', 'password' : 'clohfub24'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD25', 'password' : 'ckjegio25'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD26', 'password' : 'ckesnye26'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD27', 'password' : 'cfeasil27'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD28', 'password' : 'cgragol28'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD29', 'password' : 'cpoesie29'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD30', 'password' : 'chedsaq30'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD31', 'password' : 'cgredas31'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD32', 'password' : 'ckitmeb32'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD33', 'password' : 'ckloder33'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD34', 'password' : 'ckesfre34'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD35', 'password' : 'cdasher35'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD36', 'password' : 'cvarmeb36'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD37', 'password' : 'closdip37'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD38', 'password' : 'clytfre38'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD39', 'password' : 'chibver39'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD40', 'password' : 'cvabnre40'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD41', 'password' : 'cklhreg41'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD42', 'password' : 'cnasder42'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD43', 'password' : 'cmutgas43'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD44', 'password' : 'cnibsad44'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD45', 'password' : 'cpitfoj45'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD46', 'password' : 'cresqad46'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD47', 'password' : 'chyrfes47'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD48', 'password' : 'ckellib48'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD49', 'password' : 'clesder49'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD50', 'password' : 'clasred50'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD51', 'password' : 'cbarced51'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD52', 'password' : 'ccerfik52'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD53', 'password' : 'cgitlas53'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD54', 'password' : 'cledvio54'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD55', 'password' : 'clurden55'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD56', 'password' : 'cloaser56'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD57', 'password' : 'cvorgal57'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD58', 'password' : 'cmaxdes58'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD59', 'password' : 'cherfil59'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD60', 'password' : 'ckanfre60'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD61', 'password' : 'cbarfil61'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD62', 'password' : 'cjastyj62'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD63', 'password' : 'cgirfed63'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD64', 'password' : 'ckanfol64'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD65', 'password' : 'cbesloi65'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD66', 'password' : 'clisfre66'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD67', 'password' : 'cnasdin67'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD68', 'password' : 'cpakreo68'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD69', 'password' : 'cmedlib69'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD70', 'password' : 'cnaxgre70'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD71', 'password' : 'cjoldes71'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD72', 'password' : 'cmanhol72'},
  { 'taken': true, 'user' : 'INFO125_H14_STUD73', 'password' : 'cnesglo73'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD74', 'password' : 'clitfas74'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD75', 'password' : 'cnedsaf75'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD76', 'password' : 'coppder76'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD77', 'password' : 'ckashil77'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD78', 'password' : 'cbasfre78'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD79', 'password' : 'cjanbil79'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD80', 'password' : 'cgodlag80'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD81', 'password' : 'cvankih81'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD82', 'password' : 'ckordeg82'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD83', 'password' : 'clasfre83'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD84', 'password' : 'ckidgir84'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD85', 'password' : 'ckevdro85'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD86', 'password' : 'cneagre86'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD87', 'password' : 'cjytfiv87'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD88', 'password' : 'cdotlak88'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD89', 'password' : 'cnetoka89'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD90', 'password' : 'cgeasad90'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD91', 'password' : 'cgutreg91'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD92', 'password' : 'csaxlit92'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD93', 'password' : 'cmorgib93'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD94', 'password' : 'cbortik94'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD95', 'password' : 'cvarban95'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD96', 'password' : 'ckidret96'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD97', 'password' : 'ckanber97'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD98', 'password' : 'clasedb98'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD99', 'password' : 'cvaskig99'},
  { 'taken': false, 'user' : 'INFO125_H14_STUD100', 'password' : 'clastis100'}
  ];

  $scope.addAccounts = function(){
    console.log("KJØRER");
    console.log($scope.insertData.length);
    for(var i=0;i<$scope.insertData.length;i++){
      console.log($scope.insertData[i]);
      $scope.accounts.$add($scope.insertData[i]);
    }

  }
  $scope.getAccount = function(){
    var keepGoing = true;
    angular.forEach( $scope.accounts, function(value){
      if(keepGoing){
        if( !angular.isFunction(value)){
          if(value.taken===false){
            console.log(value);
            value.taken = true;
            $scope.accounts.$save(value.$id);
            keepGoing = false;

            $location.path('/about/' + value.user + '/' + value.password);
            ClickedCtrl.setClicked();
          }
        }
      }
    });
  };
  $scope.getAccounts = function(){
    var antallKonto = 0;
    angular.forEach( $scope.accounts, function(value){
      if( !angular.isFunction(value)){
        if(value.taken===true){
          antallKonto++;
        }
      }
    });
    return antallKonto;
  };
  $scope.getClicked = function(){
    return ClickedCtrl.getClicked();
  };
}]);
