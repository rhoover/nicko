(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .directive('writeAmazon', writeAmazon);

    function writeAmazon ($timeout) {

        var ddo = {
            link: link,
            restrict: 'A'
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {
            $timeout(function () {
                var scriptTag = document.createElement('script');
                scriptTag.src = 'http://www.nickoinc.com/libs/aws-sdk-ses-min.js';
                var dest = angular.element(document.body);
                dest.append(scriptTag);
            }, 2000);
        }
    }
})();