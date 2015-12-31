'use strict';

describe('Controller: Myroute1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angulartestApp'));

  var Myroute1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Myroute1Ctrl = $controller('Myroute1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Myroute1Ctrl.awesomeThings.length).toBe(3);
  });
});
