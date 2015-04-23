(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .directive('preventEnter', preventEnter);

    function preventEnter () {

        var ddo = {
            link: link,
            restrict: 'A'
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {
            element.bind('keydown keyup keypress', function (event) {
                if(event.which === 13) {
                    event.preventDefault();
                    element[0].blur();
                }
            });
        }
    }
})();