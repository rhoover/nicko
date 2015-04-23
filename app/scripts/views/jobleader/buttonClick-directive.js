(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .directive('buttonClick', buttonClick);

    function buttonClick () {

        var ddo = {
            link: link,
            restrict: 'A'
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {
            element.bind('click', function () {
                scope.$apply(attrs.buttonClick);
            });
        }
    }
})();