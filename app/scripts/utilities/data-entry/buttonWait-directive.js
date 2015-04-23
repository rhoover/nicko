(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .directive('buttonWait', buttonWait);

    function buttonWait () {

        var ddo = {
            link: link,
            restrict: 'A',
            scope: {}
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {
            element.on('click', function () {
                element[0].innerHTML = 'Hang tight, this takes a few seconds';
                element.addClass('signup-submit-wait');
            });
        }
    }
})();