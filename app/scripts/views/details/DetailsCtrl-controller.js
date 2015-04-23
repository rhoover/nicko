(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DetailsCtrl', DetailsCtrl);

    function DetailsCtrl($location, details) {
        /*jshint validthis: true */
        var spk = this;

        userServices();
        statesList();
        goForthAndBind();

        ////////////////

        function userServices() { /*Part of form really, but... separation*/
            details.fetchAvailableServices()

                .then(function (services) {
                    spk.services = services;

                    spk.selectMe = function () {
                        spk.clientDetails.cdServices.$dirty = true;
                        spk.clientDetails.cdServices.$invalid = false;
                        spk.clientDetails.cdServices.$pristine = false;

                        for (var i = services.length - 1; i >= 0; i--) {
                            var idx = spk.clientDetails.cdServices[services[i].$id];
                            idx.$dirty = true;
                            idx.$valid = true;
                            idx.$invalid = false;
                            idx.$pristine = false;
                            idx.$touched = true;
                            idx.$untouched = false;
                            idx.$setViewValue(services[i].service);
                        };
                    }

                    spk.unSelectMe = function () {
                        spk.clientDetails.cdServices.$dirty = false;
                        spk.clientDetails.cdServices.$invalid = true;
                        spk.clientDetails.cdServices.$pristine = true;

                        for (var i = services.length - 1; i >= 0; i--) {
                            var idx = spk.clientDetails.cdServices[services[i].$id];
                            idx.$dirty = true;
                            idx.$valid = true;
                            idx.$invalid = false;
                            idx.$pristine = false;
                            idx.$touched = true;
                            idx.$untouched = false;
                            idx.$setViewValue('');
                        };
                    }

                });
        }

        function statesList() {
            details.fetchStates()

                .then(function (usStatesList) {
                    spk.states = usStatesList;
                });
        }

        function goForthAndBind() {
            spk.success = false;

            spk.createClientDetails = function (dataFromForm) {
                details.createCompanyMeta(dataFromForm)

                    //receiving useLessData from the factory simply completes the promise chain
                    .then(function (useLessData) {
                            spk.success = true;
                            $location.path('/dashboard');
                    });
            }
        }
    }
})();