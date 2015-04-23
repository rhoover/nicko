(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashClientsCtrl', DashClientsCtrl);

    function DashClientsCtrl($scope, fetchStates, fetchInvoiceOptions, fetchJobTypes, clientsList, clientsAdd, dashDataSortFilter) {
        /*jshint validthis: true */
        var spk = this;

        invoiceOccurrence();
        statesList();
        clientList();
        jobTypesList();
        createClient();

        ////////////////

        function invoiceOccurrence() {
            fetchInvoiceOptions.invoicesList()
                .then(function (occurrences) {
                    spk.occurrences = occurrences;
                });
        }

        function statesList() {
            fetchStates.unitedStates()
                .then(function (usStatesList) {
                    spk.states = usStatesList;
                });
        }

        function clientList() {
            clientsList.fetchClients()
                .then(function (clientsListData) {
                    var sortedDsc = dashDataSortFilter.sortDsc(clientsListData);
                    // spk.clients = clientsListData;
                    spk.clients = sortedDsc;
                });
            }

        function jobTypesList() {
            fetchJobTypes.jobTypeList()
                .then(function (jobTypes) {
                    spk.jobTypes = jobTypes;
                })
        }

        function createClient() {

            spk.createNewCustomer = function (dataFromForm) {
                clientsAdd.createClient(dataFromForm)
                    .then(function (switchData) {
                        spk.newcustomer = null;
                        $scope.$evalAsync(function () {
                            clientsList.fetchClients()
                                .then(function (clientsListData) {
                                    var sortedDsc = dashDataSortFilter.sortDsc(clientsListData);
                                    // spk.clients = clientsListData;
                                    spk.clients = sortedDsc;
                                    $scope.switch = switchData;
                                });
                        });
                    });
            }
        }
    }
})();