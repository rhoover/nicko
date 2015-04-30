(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashInvoiceCtrl', DashInvoiceCtrl);

    function DashInvoiceCtrl($scope, userCompanyMetaStore, clientsList, jobsList, findJobsFilter) {
        /*jshint validthis: true */
        var spk = this;
        spk.selectedClient = selectedClient;

        getClientMeta();
        getClients();

        ////////////////

        function getClientMeta() {
            spk.user = userCompanyMetaStore.fetchCache();
        }

        function getClients() {
            clientsList.fetchClients()
                .then(function (clientsListData) {
                    var pickMeClient = {
                        fullname: 'Pick A Client'
                    };

                    clientsListData.splice(0, 0, pickMeClient);
                    spk.clients = clientsListData;
                });
        }

        function selectedClient(chosenOne) {
            clientJobs(chosenOne);
        }

        function clientJobs(cO) {
            jobsList.fetchJobs()
                .then(function (jobsData) {
                    return jobsData;
                })
                .then(function (jobsData) {
                    spk.jobs = findJobsFilter.userJobs(jobsData, cO.creationMoment);
                });
        }
    }
})();