(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .service('loadAmazonSES', loadAmazonSES);

    function loadAmazonSES($q, $window) {

        var deferred = $q.defer();

        function writeScript() {
            var scriptTag = document.createElement('script');
            scriptTag.src = 'http://www.nickoinc.com/libs/aws-sdk-ses-min.js';
            angular.element(document.body).append(scriptTag);
        }

        // $window.initSES = function () {
        //     deferred.resolve();
        // };

        writeScript();

        $window.AWS = deferred.resolve;

        return deferred.promise;
    }
})();