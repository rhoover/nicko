(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .directive('dashView', dashView);

    function dashView ($templateCache) {

        var ddo = {
            restrict: 'A',
            scope: {},
            templateUrl: templateUrl
        };
        return ddo;

        ////////////////

        function templateUrl(elem, attrs) {
            if (attrs.ngSwitchDefault) {
                return attrs.ngSwitchDefault + '.html';
            } else {
                return attrs.ngSwitchWhen + '.html';
            }
        }
    }
})();