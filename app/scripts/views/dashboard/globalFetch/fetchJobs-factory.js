(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('jobsList', jobsList);

    function jobsList($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            fetchJobs: fetchJobs
        };
        return factoryAPI;

        ////////////////

        function fetchJobs() {
            var user = authStore.fetchCache();
            var jobsRef = new Firebase(fbRootUrl + '/userJobs' + '/' + user.uid);
            var jobsArray = $firebaseArray(jobsRef);

            return jobsArray.$loaded()
                .then(function () {
                    return jobsArray;
                })
                .catch(function (error) {
                    console.log('Shit!!! Fetching Error of Some Sort:  ' + error);
                });
        }
    }
})();