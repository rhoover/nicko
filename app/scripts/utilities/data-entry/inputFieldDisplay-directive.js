(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .directive('inputFieldDisplay', inputFieldDisplay);

    function inputFieldDisplay () {

        var ddo = {
            link: link,
            restrict: 'A'
            // scope: {}
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {
            element.on('blur', function () {
                //kinda brittle, but c'est la vie for now
                element.val().length > 0 ? element.next().addClass('filled') : element.next().removeClass('filled'); // jshint ignore:line
            });
        }
    }
})();