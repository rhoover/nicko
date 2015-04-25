(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashJobsCtrl', DashJobsCtrl);

    function DashJobsCtrl($scope, fetchStates, fetchServices, fetchJobFreqs, clientsList, jobsList, jobsAdd, dashDataSortFilter) {
        /*jshint validthis: true */
        var spk = this;

        statesList();
        servicesList();
        clientList();
        jobList();
        frequenciesList();
        createJob();

        ////////////////

        function statesList() {
            fetchStates.unitedStates()
                .then(function (usStatesList) {
                    spk.states = usStatesList;
                });
        }

        function servicesList() {
            fetchServices.serviceList()
                .then(function (services) {
                    spk.services = services;
                })
        }

        function frequenciesList() {
            fetchJobFreqs.frequencyList()
                .then(function (frequencies) {
                    spk.frequencies = frequencies;
                })
        }

        function clientList() {
            clientsList.fetchClients()
                .then(function (clientsListData) {
                    //get rid of properties inserted by fbArray
                    for (var i = clientsListData.length - 1; i >= 0; i--) {
                        delete clientsListData[i].$id;
                        delete clientsListData[i].$priority;
                    }
                    //needed so that the select element is presented as expected
                    var pickMeClient = {
                        fullname: 'Pick A Client'
                    };
                    clientsListData.splice(0, 0, pickMeClient);

                    spk.clients = clientsListData;
                });
            }

        function jobList() {
            jobsList.fetchJobs()
                .then(function (jobsListData) {
                    var sortedDsc = dashDataSortFilter.sortDsc(jobsListData);
                    spk.jobs = sortedDsc;
                });
        }

        function createJob() {
            spk.createNewJob = function (dataFromForm) {
                jobsAdd.createJob(dataFromForm)
                    .then(function (switchData) {
                        spk.newjob = null;
                        $scope.$evalAsync(function () {
                            jobsList.fetchJobs()
                                .then(function (jobsListData) {
                                    var sortedDsc = dashDataSortFilter.sortDsc(jobsListData);
                                    spk.jobs = sortedDsc;
                                    $scope.switch = switchData;
                                });
                        });
                    });
            }
        }
    }
})();