(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('fetchServices', fetchServices);

    function fetchServices($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            serviceList: serviceList
        };
        return factoryAPI;

        ////////////////

        function serviceList() {
            var servicesRef = new Firebase(fbRootUrl + '/services');
            var servicesArray = $firebaseArray(servicesRef);

            return servicesArray.$loaded()
            .then(function () {
                    //get rid of properties inserted by fbArray
                    for (var i = servicesArray.length - 1; i >= 0; i--) {
                        delete servicesArray[i].$id;
                        delete servicesArray[i].$priority;
                    }
                    //needed so that the select element is presented as expected
                    var pickMeService = {
                        service: 'Pick A Service'
                    };
                    servicesArray.splice(0, 0, pickMeService);

                return servicesArray;
            });
        }
    }
})();