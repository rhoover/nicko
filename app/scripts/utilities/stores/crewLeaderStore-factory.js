(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .factory('crewLeaderStore', crewLeaderStore);

    /* @ngInject */
    function crewLeaderStore($cacheFactory) {

        var factoryAPI = {
            setCache: setCache,
            fetchCache: fetchCache
        };
        return factoryAPI;

        ////////////////

        function setCache(userData) {
            $cacheFactory('userObject').put('userObjectData', userData);
        }

        function fetchCache() {
            var crewLeaderData = $cacheFactory.get('userObject').get('userObjectData');
            return crewLeaderData;
        }
    }
})();