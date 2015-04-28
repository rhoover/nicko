(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .directive('homeResponsiveBg', homeResponsiveBg);

    function homeResponsiveBg ($timeout) {

        var ddo = {
            link: link,
            restrict: 'A',
            scope: {}
        };
        return ddo;

        ////////////////

        function link(scope, element, attrs) {

            var bodyResult = getComputedStyle(element[0], '::after').content;
            var elementClassName = element[0].className;

            bodyResult = bodyResult.replace(/["']{1}/gi,"");

            switch (bodyResult) {
                case 'phone' :
                    element.addClass(elementClassName + '-phone');
                break;
                case 'tablet' :
                    element.addClass(elementClassName + '-tablet');
                break;
                case 'laptop' :
                    element.addClass(elementClassName + '-laptop');
                break;
                case 'computer' :
                    element.addClass(elementClassName + '-computer');
                break;
            }
        }
    }
})();