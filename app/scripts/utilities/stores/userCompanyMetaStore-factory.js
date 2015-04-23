(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .factory('userCompanyMetaStore', userCompanyMetaStore);

    function userCompanyMetaStore($cacheFactory) {

        var factoryAPI = {
            setCache: setCache,
            fetchCache: fetchCache
        };
        return factoryAPI;

        ////////////////

        function setCache(metaData) {
            var meta = $cacheFactory('metaObject');
            meta.put('metaObjectInfo', metaData);
        }

        function fetchCache() {
            var metaData = $cacheFactory.get('metaObject').get('metaObjectInfo');
            return metaData;
        }
    }
})();