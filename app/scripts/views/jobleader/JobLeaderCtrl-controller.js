(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('JobLeaderCtrl', JobLeaderCtrl);

    function JobLeaderCtrl(jobsListField, dashDataSortFilter, loadAmazonSES) {
        /*jshint validthis: true */
        var spk = this;

        jobs();
        // buttonClick();
        amazonSES();

        ////////////////

        function jobs() {
            jobsListField.fetchJobs()
                .then(function (jobsListData) {
                    //descending sort for now until retrieve by date is implemented
                    var sortedDsc = dashDataSortFilter.sortDsc(jobsListData);
                    spk.jobList = sortedDsc;
                });
        }

        function amazonSES() {
            if (window.AWS) {
                console.log('AWS We Have Lift Off');
            };
        }

    }
})();