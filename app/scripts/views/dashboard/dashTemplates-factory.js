(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('dashTemplates', dashTemplates);

    function dashTemplates($http, $templateCache) {

        var factoryAPI = {
            fetchTemplates: fetchTemplates
        };
        return factoryAPI;

        ////////////////

        function fetchTemplates() {
            return $http.get('/partials/dashboard/home/home.html')
                .then(function (result) {
                    $templateCache.put('home.html', result.data);
                    return $http.get('/partials/dashboard/clients/clients.html');
                })
                .then(function (result) {
                    $templateCache.put('clients.html', result.data);
                    return $http.get('/partials/dashboard/jobs/jobs.html');
                })
                .then(function (result) {
                    $templateCache.put('jobs.html', result.data);
                    return $http.get('/partials/dashboard/invoice/invoice.html');
                })
                .then(function (result) {
                    $templateCache.put('invoice.html', result.data);
                    return $http.get('/partials/dashboard/settings/settings.html');
                })
                .then(function (result) {
                    $templateCache.put('settings.html', result.data);
                    return $http.get('/partials/dashboard/help/help.html');
                })
                .then(function (result) {
                    $templateCache.put('help.html', result.data);
                    return;
                });
        }
    }
})();