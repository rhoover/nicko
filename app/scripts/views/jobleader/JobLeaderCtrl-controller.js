(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('JobLeaderCtrl', JobLeaderCtrl);

    function JobLeaderCtrl($window, $scope, jobsListField, dashDataSortFilter, loadAmazonSES) {
        /*jshint validthis: true */
        var spk = this;

        jobs();
        buttonClick();
        amazonSES();

        ////////////////

        function jobs() {
            jobsListField.fetchJobs()
                .then(function (jobsListData) {
                    var sortedDsc = dashDataSortFilter.sortDsc(jobsListData);
                    spk.jobList = sortedDsc;
                });
        }

        function buttonClick() {
            $scope.beginJob = function () {
                alert('Excellent! The mothership has been notified!');
            };
            $scope.endJob = function () {
                alert('Nicely Done! The mothership and the customer have been notified!');
            };
        }

        function amazonSES() {
            if (window.AWS) {
                console.log('AWS We Have Lift Off');
            };
            // loadAmazonSES.writeScript()
            // loadSES.initSES
            //     .then(function () {
            //         console.log('promise');
            //     });
                // if (window.AWS) {
                //     console.log('Effing A Cotton');
                // } else {
                //     console.log("Where is SES??");
                // }
        }

    }
})();