(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .service('loadAmazonSES', loadAmazonSES);

    function loadAmazonSES($window, $q) {

        var deferred = $q.defer();

        function writeScript() {
            var scriptTag = document.createElement('script');
            scriptTag.src = 'libs/aws/aws-sdk-ses.js?callback=initSES';
            angular.element(document.body).append(scriptTag);
        }

        $window.initSES = function () {
            deferred.resolve();
        };

        writeScript();

        return deferred.promise;
    }
})();