(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .filter('dashDataSort', dashDataSort);

        function dashDataSort () {

            var filterAPI = {
                sortAsc: sortAsc,
                sortDsc: sortDsc
            }
            return filterAPI;

            ////////////////

            function sortAsc(dataInput) {
                var sortedAsc = [];

                sortedAsc = dataInput.sort(function (a, b) {
                    return (a.creationMoment < b.creationMoment) ? -1 : 1;
                });
                return sortedAsc;
            }

            function sortDsc(dataInput) {
                var sortedDsc = [];

                sortedDsc = dataInput.sort(function (a, b) {
                    return (a.creationMoment > b.creationMoment) ? -1 : 1;
                });
                return sortedDsc;
            }
        }
})();