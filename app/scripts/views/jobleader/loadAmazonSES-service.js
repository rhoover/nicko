(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .service('loadAmazonSES', loadAmazonSES);

    // function loadAmazonSES($q, $window) {
    function loadAmazonSES($window) {

        // var deferred = $q.defer();

        writeScript();
        function writeScript() {
            var scriptTag = document.createElement('script');
            scriptTag.src = 'http://www.nickoinc.com/libs/aws-sdk-ses-min.js';
            var dest = angular.element(document.body);
            console.log(dest);
            // angular.element(document.body).append(scriptTag);
            dest.append(scriptTag);
        }

        // $window.initSES = function () {
        //     deferred.resolve();
        // };


        // $window.AWS = deferred.resolve();

        // return deferred.promise;
    }
})();