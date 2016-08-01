accountApp.factory('Ajax', function ($http) {

    var Ajax = {};

    Ajax.get = function (url, callback) {
        $http({
            method: 'GET',
            dataType: 'JSON',
            url: url
        }).success(callback);
    };

    Ajax.post = function (url, data, callback) {
        $http({
            method: 'POST',
            dataType: 'JSON',
            url: url,
            data: data,
        }).success(callback);
    };

    return Ajax;

});