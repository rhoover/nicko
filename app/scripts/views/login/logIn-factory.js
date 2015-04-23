(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('logIn', logIn);

    function logIn($firebaseAuth, fbRootUrl, fbUserActivityUrl, fbUsersUrl, authStore, roleTest) {

        var factoryAPI = {
            firebaseLogIn: firebaseLogIn
        };
        return factoryAPI;

        ////////////////

        function firebaseLogIn(dataFromForm) {
            var rootRef = new Firebase(fbRootUrl);
            var logRef = new Firebase(fbUserActivityUrl);
            var rightNow = moment().unix();

            return $firebaseAuth(rootRef).$authWithPassword({
                email: dataFromForm.email,
                password: dataFromForm.password
                })

                .then(function (authData) {
                    var logInData = {
                        email: dataFromForm.email,
                        password: dataFromForm.password
                    }
                    authStore.setCache(authData);
                    authStore.setloginCache(logInData);
                    logRef.child(authData.uid).child('log' + ':' + rightNow).set({'login': rightNow});
                    return authData.uid;
                })

                .then(function (authUID) {
                    return roleTest.firebaseObjectQuery(authUID);
                })

                .then(function (roleTestResults) {
                    return roleTestResults
                })

                .catch(function (error) {
                    console.log('Shit! Login error:  ', error);
                });

        }

    }
})();