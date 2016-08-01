'use strict'
accountApp.controller('searchCtrl', function ($scope, $http, $rootScope) 
{
    var users = null;
    var userColByAccId = {};

    $http.get('json/users.json').then(function(res)
    {
        users = res.data;
        for(var i in users) 
        {
            userColByAccId[users[i].accountNo] = users[i];
        }
    });
    $scope.submitNo = function () 
    {
        if($scope.searchString)
        {
            var data = userColByAccId[$scope.searchString];
            if(data) 
            {
                $rootScope.selectedUser = data;
                window.location.hash = '/dashboard'; 
            }
            else
            {
                alert('User detail not found');
            }
        }
        else
        {
            alert('Invalid text');
        }
    }
});