(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashInvoiceCtrl', DashInvoiceCtrl);

    function DashInvoiceCtrl($scope, userCompanyMetaStore, clientsList, jobsList) {
        /*jshint validthis: true */
        var spk = this;

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

        //delibertly breaking hoisting pattern above so chosen client data can be passed to a function
        $scope.selectedClient = function (chosenOne) {
            clientJobs(chosenOne);
        }

        function clientJobs(cO) {
            jobsList.fetchJobs()
                .then(function (jobsData) {
                    return jobsData;
                });
        }
    }
})();