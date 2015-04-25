(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('jobsListField', jobsListField);

    /* @ngInject */
    function jobsListField($firebaseAuth, $firebaseArray, fbRootUrl, crewLeaderStore) {

        var factoryAPI = {
            fetchJobs: fetchJobs
        };
        return factoryAPI;

        ////////////////

        function fetchJobs() {
            var boss = crewLeaderStore.fetchCache();
            console.log(fbRootUrl + 'userJobs' + '/' + boss);
            var jobsRef = new Firebase(fbRootUrl + '/userJobs' + '/' + boss);
            var jobsArray = $firebaseArray(jobsRef);

            return jobsArray.$loaded()
                .then(function () {
                    return jobsArray;
                })
                .catch(function () {
                    console.log('Shit!! Fetching Error of Some Sort:  ' + error);
                });
        }
    }
})();