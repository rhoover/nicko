(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($firebaseAuth, $firebaseArray, fbRootUrl) {
        /*jshint validthis: true */
        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
        }
    }
})();