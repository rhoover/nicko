(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .directive('nonBlockingCss', nonBlockingCss);

    function nonBlockingCss () {

        var ddo = {
            link: link,
            priority: 10000,
            restrict: 'A',
            terminal: true
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {
                // attrs.$set('media', 'all');
                attrs.$set('rel', 'stylesheet');
        }
    }
})();