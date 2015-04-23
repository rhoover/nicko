(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('jobsAdd', jobsAdd);

    function jobsAdd($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            createJob: createJob
        };
        return factoryAPI;

        ////////////////

        function createJob(dataFromForm) {
            var rootRef = new Firebase(fbRootUrl);
            var authorize = authStore.fetchloginCache();
            var jobID = moment().unix();
            var creationMoment = {
                creationMoment: jobID
            };
            var completeData = {};

            dataFromForm.quote = parseInt(dataFromForm.quote, 10);
            completeData = angular.extend(completeData, dataFromForm, creationMoment);

            return $firebaseAuth(rootRef).$authWithPassword({
                email: authorize.email,
                password: authorize.password
            })

            .then(function (authData) {
                rootRef.child('userJobs').child(authData.uid).child('job' + ':' + jobID).set(completeData);
                return authData;
            })

            .then(function (authData) {
                var convertedDate = {
                    dateStamp: moment(completeData.date, "dddd, MMMM Do YYYY").unix()
                };
                rootRef.child('userJobs').child(authData.uid).child('job' + ':' + jobID).update(convertedDate);
                // return 'data';
                return authData;
            })

            .then(function (authData) {
                var freqID = completeData.frequency.id;
                var jobProp = 'job' + ':' + jobID.toString();
                var freqSet = {};

                freqSet[jobProp] = true;

                rootRef.child('userJobOccurrence').child(freqID).child(authData.uid).update(freqSet);
                return 'data';
            })

            .catch(function (error) {
                console.log('Shit! Creating Client error:  ', error);
            });
        }
    }
})();