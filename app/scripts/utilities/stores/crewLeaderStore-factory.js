(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .factory('crewLeaderStore', crewLeaderStore);

    /* @ngInject */
    function crewLeaderStore($cacheFactory) {

        var factoryAPI = {
            setBossCache: setBossCache,
            fetchBossCache: fetchBossCache
        };
        return factoryAPI;

        ////////////////

        function setBossCache(userData) {
            $cacheFactory('bossObject').put('bossObjectData', userData);
        }

        function fetchBossCache() {
            return $cacheFactory.get('bossObject').get('bossObjectData');
        }
    }
})();