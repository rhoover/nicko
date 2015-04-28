(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('jobsListField', jobsListField);

    /* @ngInject */
    function jobsListField($firebaseAuth, $firebaseArray, $cacheFactory, fbRootUrl, crewLeaderStore) {

        var factoryAPI = {
            fetchJobs: fetchJobs
        };
        return factoryAPI;

        ////////////////

        function fetchJobs() {
            //cache set by roleTest-factory
            var boss = crewLeaderStore.fetchUserCache();
            var jobsRef = new Firebase(fbRootUrl + '/userJobs' + '/' + boss.boss);
            var jobsArray = $firebaseArray(jobsRef);

            return jobsArray.$loaded()
                .then(function () {
                    crewLeaderStore.setJobsCache(jobsArray);
                    return jobsArray;
                })
                .then(function (jobsArray) {
                    return jobsArray;
                })
                .catch(function () {
                    console.log('Shit!! Fetching Error of Some Sort:  ' + error);
                });
        }
    }
})();