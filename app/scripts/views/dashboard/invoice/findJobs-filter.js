(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .filter('findJobs', findJobs);

        function findJobs() {

            var filterAPI = {
                userJobs: userJobs
            };
            return filterAPI;

            /////////////////////

            function userJobs(jobInput, jobArg) {
                var foundJobs = [];
                angular.forEach(jobInput, function (jobObject) {
                    if (jobObject.client.creationMoment === jobArg) {
                        this.push(jobObject);
                    }
                }, foundJobs);
                return foundJobs;
            }
        }
})();