'use strict';

var accountApp = angular.module('accountApp', [
    'ngRoute'
]);

accountApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/lookup', {
                templateUrl: 'templates/lookup/search.html',
                controller: 'searchCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'templates/dashboard/details.html',
                controller: 'detailCtrl'
            })
            .otherwise({
                redirectTo: '/lookup'
            });
    }]);

