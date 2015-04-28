(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('roleTest', roleTest);

    function roleTest($firebaseObject, fbUsersUrl, crewLeaderStore) {

        var factoryAPI = {
            firebaseObjectQuery: firebaseObjectQuery
        };
        return factoryAPI;

        ////////////////

        function firebaseObjectQuery(userUID) {
            var userRef = new Firebase(fbUsersUrl).child(userUID);
            var userObject = $firebaseObject(userRef);

            return userObject.$loaded()
                .then(function () {
                    if (userObject.boss) {
                        crewLeaderStore.setBossCache(userObject.boss);
                    }
                    return userObject;
                })
                .then(function (userObject) {
                    //YAT yet another ternary, these things are fucking great!!!!
                    return userObject.owner === true ? 'dashboard' : 'jobleader';
                });
        }
    }
})();