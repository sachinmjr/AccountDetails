accountApp.factory('utility', function (httpReq) {
    var utility = function () {
        var self = this;
    }

    utility.prototype.isDate = function(val) {
        var d = new Date(val);
        return d.toString() != 'Invalid Date' ? true : false;
    }

    return new utility();
});