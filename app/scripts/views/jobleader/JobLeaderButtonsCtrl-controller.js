(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('JobLeaderButtonsCtrl', JobLeaderButtonsCtrl);

    function JobLeaderButtonsCtrl($scope, $routeParams, crewLeaderStore) {
        /*jshint validthis: true */
        var spk = this;

        buttonClick();
        job();
        client();

        ////////////////

        function client() {
            var clients = crewLeaderStore.fetchJobsCache();
            var foundClient = [];
            angular.forEach(clients, function (dummyObject) {
                if(dummyObject.$id === $routeParams.id) {
                    this.push(dummyObject);
                }
            }, foundClient);
            var client = foundClient.shift();
            spk.client = client.client.fullname;
        }

        function job() {
            var test = crewLeaderStore.fetchJobsCache();

        }

        function buttonClick() {
            $scope.beginJob = function () {
                alert('Excellent! The mothership has been notified!');
            };
            $scope.endJob = function () {
                alert('Nicely Done! The mothership and the customer have been notified!');
            };
        }
    }
})();