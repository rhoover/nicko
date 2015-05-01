(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $location, fbRootUrl, logIn, loadAmazonSES) {
        /*jshint validthis: true */
        var spk = this;

        logMeIn();

        ////////////////

        function logMeIn() {
            spk.success = false;

            // destroy existing auth objects for easy testing, but keep in mind for edge
            // case where different office admins use same computer
            var rootRef = new Firebase(fbRootUrl);
            rootRef.unauth();

            spk.loginClient = function (dataFromForm) {

                logIn.firebaseLogIn(dataFromForm)
                    .then(function (roleTestResults) {
                        $scope.$evalAsync(function () {
                            $location.path(roleTestResults);
                        });
                    });
            };
        }
    }
})();