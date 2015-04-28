(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('JobLeaderButtonsCtrl', JobLeaderButtonsCtrl);

    function JobLeaderButtonsCtrl($scope) {
        /*jshint validthis: true */
        var spk = this;

        buttonClick();

        ////////////////

        function buttonClick() {
            $scope.beginJob = function () {
                alert('Excellent! The mothership has been notified!');
            };
            $scope.endJob = function () {
                alert('Nicely Done! The mothership and the customer have been notified!');
            };
        }
    }
})();