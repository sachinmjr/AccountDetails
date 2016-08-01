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
                swal(
                {
                    'title':"",
                    'text':"User detail not found",
                    'type': null,
                    "html":true,
                    'allowOutsideClick':true,
                    'allowEscapeKey':true,
                    'confirmButtonColor': "#DD6B55",
                    'closeOnConfirm': true
                },
                function(confirmation)
                {
                    if(confirmation)
                    {
                        // nothing
                    }
                });
            }
        }
        else
        {
            swal(
                {
                    'title':"",
                    'text':"Invalid text",
                    'type': null,
                    "html":true,
                    'allowOutsideClick':true,
                    'allowEscapeKey':true,
                    'confirmButtonColor': "#DD6B55",
                    'closeOnConfirm': true
                },
                function(confirmation)
                {
                    if(confirmation)
                    {
                        // nothing
                    }
                });
        }
    }
});