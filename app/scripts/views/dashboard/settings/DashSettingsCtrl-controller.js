(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashSettingsCtrl', DashSettingsCtrl);

    function DashSettingsCtrl(userCompanyMetaStore) {
        /*jshint validthis: true */
        var spk = this;

        display();
        edit();

        ////////////////

        function display() {

            var metaData = userCompanyMetaStore.fetchCache();
            var services = [];

            angular.forEach(metaData.services, function (value, key) {
                services.push(value);
            });

            spk.addressone = metaData.addressone;
            spk.addresstwo = metaData.addresstwo;
            spk.city = metaData.city;
            spk.state = metaData.state.abbreviation;
            spk.zip = metaData.zip;

            spk.services = services;


        }

        // Courtersy: http://codepen.io/gaboesquivel/pen/mgCAG/
        function edit() {
            spk.editMode = false;
            spk.toggleEditMode = function () {
                spk.editMode = spk.editMode === false ? true : false;
            }
        }
    }
})();