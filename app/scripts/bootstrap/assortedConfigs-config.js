(function () {
    'use strict';

    angular
        .module('nickoApp.boot')
        .config(assortedConfigs);

        function assortedConfigs($compileProvider, $locationProvider) {
            $compileProvider.debugInfoEnabled(false);
            $locationProvider.html5Mode(true);
        }
})();