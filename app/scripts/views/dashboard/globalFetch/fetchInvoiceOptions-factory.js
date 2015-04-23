(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('fetchInvoiceOptions', fetchInvoiceOptions);

    function fetchInvoiceOptions($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            invoicesList: invoicesList
        };
        return factoryAPI;

        ////////////////

        function invoicesList() {
            var invoiceOccRef = new Firebase(fbRootUrl + '/invoiceOccurrence');
            var invoiceOccArray = $firebaseArray(invoiceOccRef);

            return invoiceOccArray.$loaded()
                .then(function () {

                    for (var i = invoiceOccArray.length - 1; i >= 0; i--) {
                        delete invoiceOccArray[i].$id;
                        delete invoiceOccArray[i].$priority;
                    };

                    var pickMeInvoice = {
                        name: ' Pick an Invoicing Frequency',
                        id: 'pickme'
                    }

                    invoiceOccArray.splice(0, 0, pickMeInvoice);

                    return invoiceOccArray;
                });
        }
    }
})();