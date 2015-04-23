(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('clientsAdd', clientsAdd);

    function clientsAdd($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            createClient: createClient
        };
        return factoryAPI;

        ////////////////

        function createClient(dataFromForm) {
            var rootRef = new Firebase(fbRootUrl);
            var authorize = authStore.fetchloginCache();
            var clientID = moment().unix();
            var creationMoment = {
                creationMoment: clientID
            };
            var completeData = {};
            completeData = angular.extend(completeData, dataFromForm, creationMoment);

            return $firebaseAuth(rootRef).$authWithPassword({
                email: authorize.email,
                password: authorize.password
            })

            .then(function (authData) {
                rootRef.child('userClients').child(authData.uid).child('client' + ':' + clientID).set(completeData);
                return authData.uid;
            })

            .then(function (userUID) {
                var occID = completeData.invoiceOccurrence.id;
                var typeID = completeData.jobType.id;

                var clientProp = 'client' + ':' + clientID.toString();

                var clientSet = {};
                var jobSet = {};

                clientSet[clientProp] = true;
                jobSet[clientProp] = true;

                rootRef.child('userInvoiceOccurrence').child(occID).child(userUID).update(clientSet);
                rootRef.child('userJobType').child(typeID).child(userUID).update(jobSet);

                return 'data';
            })

            .catch(function (error) {
                console.log('Shit! Creating Client error:  ', error);
            });
        }
    }
})();