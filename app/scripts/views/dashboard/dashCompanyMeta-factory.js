(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('dashCompanyMeta', dashCompanyMeta);

    function dashCompanyMeta($firebaseObject, fbRootUrl, userCompanyMetaStore) {

        var factoryAPI = {
            fetch: fetch
        };
        return factoryAPI;

        ////////////////

        function fetch(userUID) {
            var companyRef = new Firebase(fbRootUrl);
            var companyMetaObject = $firebaseObject(companyRef.child('userCompanyMeta').child(userUID));

            return companyMetaObject.$loaded()
                .then(function () {
                    userCompanyMetaStore.setCache(companyMetaObject);
                    return companyMetaObject
                });
        }
    }
})();