(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('DashHomeCtrl', DashHomeCtrl);

    function DashHomeCtrl(authStore) {
        /*jshint validthis: true */
        var vm = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
        }
    }
})();