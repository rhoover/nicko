(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .directive('homeResponsiveBg', homeResponsiveBg);

    function homeResponsiveBg ($location, $timeout) {

        var directiveDefObject = {
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directiveDefObject;

        ////////////////

        function link(scope, element, attrs) {

            var bodyResult = getComputedStyle(element[0], ':before').content;
            var elementClassName = element[0].className;

            bodyResult = bodyResult.replace(/"/g,''); //Because Firefox keeps quotes from content

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