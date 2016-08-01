'use strict';


describe('Account Details', function () {

  beforeEach(module('accountApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Validate users details search controller', function () 
  {
    it('set search string value and check', function () {
      var $scope = {};
      var controller = $controller('searchCtrl', { $scope: $scope });

      $scope.searchString = '6723456789';
      $scope.submitNo();
      expect($scope.searchString).toBe('6723456789');
    }); 

    it('if value not set then undefined for string', function () {
      var $scope = {};
      var controller = $controller('searchCtrl', { $scope: $scope });
      $scope.submitNo();
      expect($scope.searchString).toBe(undefined);
    });
  });
});