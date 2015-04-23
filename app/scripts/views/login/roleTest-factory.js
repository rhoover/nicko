(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('roleTest', roleTest);

    function roleTest($firebaseObject, fbUsersUrl) {

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
                    //YAT yet another ternary, these things are fucking great!!!!
                    return userObject.owner === true ? 'dashboard' : 'jobleader';
                });
        }
    }
})();