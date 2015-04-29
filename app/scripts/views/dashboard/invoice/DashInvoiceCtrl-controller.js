(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashInvoiceCtrl', DashInvoiceCtrl);

    function DashInvoiceCtrl(userCompanyMetaStore, clientsList) {
        /*jshint validthis: true */
        var spk = this;

        getClientMeta();
        getClients();

        ////////////////

        function getClientMeta() {
            var companyData = userCompanyMetaStore.fetchCache();
                    spk.company = companyData.companyname;
                    spk.addressone = companyData.addressone;
                    spk.addresstwo = companyData.addresstwo;
                    spk.city = companyData.city;
                    spk.state = companyData.state.abbreviation;
                    spk.zip = companyData.zip;
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
    }
})();