(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashCtrl', DashCtrl);

    function DashCtrl(authStore, dashCompanyMeta) {
        /*jshint validthis: true */
        var spk = this;

        companyHeader();

        ////////////////

        function companyHeader() {
            var authStuff = authStore.fetchCache();
            dashCompanyMeta.fetch(authStuff.uid)
                .then(function (companyMetaObject) {
                    spk.name = companyMetaObject.companyname;
                });
        }
    }
})();