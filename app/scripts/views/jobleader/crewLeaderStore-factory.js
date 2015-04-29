(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .factory('crewLeaderStore', crewLeaderStore);

    /* @ngInject */
    function crewLeaderStore($cacheFactory) {

        var factoryAPI = {
            setBossCache: setBossCache,
            fetchBossCache: fetchBossCache,
            setUserCache: setUserCache,
            fetchUserCache: fetchUserCache,
            setJobsCache: setJobsCache,
            fetchJobsCache:fetchJobsCache
        };
        return factoryAPI;

        ////////////////

        function setBossCache(userData) {
            $cacheFactory('bossObject').put('bossObjectData', userData);
        }

        function fetchBossCache() {
            return $cacheFactory.get('bossObject').get('bossObjectData');
        }

        function setUserCache(userData) {
            $cacheFactory('userObject').put('userObjectData', userData);
        }

        function fetchUserCache() {
            return $cacheFactory.get('userObject').get('userObjectData');
        }

        function setJobsCache(jobsData) {
            if (!$cacheFactory.get('jobsObject')) {
                $cacheFactory('jobsObject').put('jobsObjectData', jobsData);
            }
        }

        function fetchJobsCache() {
            return $cacheFactory.get('jobsObject').get('jobsObjectData');
        }
    }
})();