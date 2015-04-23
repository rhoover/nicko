(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('JobLeaderCtrl', JobLeaderCtrl);

    function JobLeaderCtrl($window, $scope, loadAmazonSES) {
        /*jshint validthis: true */
        var spk = this;

        buttonClick();
        amazonSES();

        ////////////////

        function buttonClick() {
            $scope.beginJob = function () {
                alert('Excellent! The mothership has been notified!');
            };
            $scope.endJob = function () {
                alert('Nicely Done! The mothership and the customer have been notified!');
            }
        }

        function amazonSES() {
            // loadAmazonSES.writeScript()
            loadAmazonSES
                .then(function (po) {
                    console.log(po);
                });
                // if (window.AWS) {
                //     console.log('Effing A Cotton');
                // } else {
                //     console.log("Where is SES??");
                // }
        }

    }
})();