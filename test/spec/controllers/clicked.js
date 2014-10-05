'use strict';

describe('Controller: ClickedCtrl', function () {

  // load the controller's module
  beforeEach(module('uibaccountsApp'));

  var ClickedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClickedCtrl = $controller('ClickedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
