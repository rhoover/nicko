(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .factory('timeStampConvert', timeStampConvert);

    function timeStampConvert() {

        var serviceInterface = {
            formatMe: formatMe
        };
        return serviceInterface;

        ////////////////

        function formatMe(timestamp) {
            var doThis = moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a");
            return doThis;
        }
    }
})();