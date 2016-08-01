'use strict'
accountApp.controller('detailCtrl', function ($scope, $rootScope) 
{
	$scope.currentDetail = $rootScope.selectedUser;

	$scope.gotosearch = function () 
	{
		 window.location.hash = '/lookup';
	}
});