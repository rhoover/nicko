(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('JobLeaderCtrl', JobLeaderCtrl);

    function JobLeaderCtrl($window, jobsListField, dashDataSortFilter, loadAmazonSES) {
        /*jshint validthis: true */
        var spk = this;

        jobs();
        // buttonClick();
        amazonSES();

        ////////////////

        function amazonSES() {
            // loadAmazonSES.writeScriptTag()
            //     .then(function (promiseThing) {
            //         console.log('PromiseThing:  ', promiseThing);
            //     });
            if (!$window.AWS) {
                console.log('Why No AWS');
            } else {
                console.log('AWS We Have Lift Off!');
            };
        }

        function jobs() {
            jobsListField.fetchJobs()
                .then(function (jobsListData) {
                    //descending sort for now until retrieve by date is implemented
                    var sortedDsc = dashDataSortFilter.sortDsc(jobsListData);
                    spk.jobList = sortedDsc;
                });
        }

    }
})();