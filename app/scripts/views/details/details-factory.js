(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('details', details);

    function details($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            fetchStates: fetchStates,
            fetchAvailableServices: fetchAvailableServices,
            createCompanyMeta: createCompanyMeta
        };
        return factoryAPI;

        ////////////////

        function fetchStates() {
            var statesRef = new Firebase(fbRootUrl + '/states');
            var statesArray = $firebaseArray(statesRef);

            return statesArray.$loaded()
                .then(function () {

                    //get rid of properties inserted by fbArray
                    for (var i = statesArray.length - 1; i >= 0; i--) {
                        delete statesArray[i].$id;
                        delete statesArray[i].$priority;
                    }

                    //needed so that the select element is presented as expected
                    var pickMeState = {
                        abbreviation: 'YO',
                        name: 'Pick A State'
                    };
                    statesArray.splice(0, 0, pickMeState);

                    return statesArray;
                });
        }

        function fetchAvailableServices() { //callback
            var servicesRef = new Firebase(fbRootUrl + '/services');
            var servicesArray = $firebaseArray(servicesRef);

            return servicesArray.$loaded()
                .then(function () {
                    return servicesArray;
                });
        }

        function createCompanyMeta(dataFromForm) {
            var rootRef = new Firebase(fbRootUrl);
            var authorize = authStore.fetchSignupCache();

            return $firebaseAuth(rootRef).$authWithPassword({
                email: authorize.email,
                password: authorize.password
            })
            .then(function (authData) {
                rootRef.child('userCompanyMeta').child(authData.uid).set(dataFromForm);
                return 'success';
            })
            .catch(function (error) {
                console.log('Shit! Login error:  ', error);
            });
        }
    }
})();