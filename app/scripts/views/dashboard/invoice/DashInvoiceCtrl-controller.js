(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashInvoiceCtrl', DashInvoiceCtrl);

    function DashInvoiceCtrl(userCompanyMetaStore) {
        /*jshint validthis: true */
        var spk = this;

        getClients();

        ////////////////

        function getClients() {
            var companyData = userCompanyMetaStore.fetchCache();
                // .then(function (companyData) {
                    console.log(companyData);
                    spk.company = companyData.companyname;
                    spk.addressone = companyData.addressone;
                    spk.addresstwo = companyData.addresstwo;
                    spk.city = companyData.city;
                    spk.state = companyData.state.abbreviation;
                    spk.zip = companyData.zip;
                // });
        }
    }
})();