(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .controller('SignupCtrl', SignupCtrl);

    function SignupCtrl($location, signUp) {
        /*jshint validthis: true */
        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
            spk.success = false;

            spk.createNewClient = function (dataFromForm) {

                signUp.firebaseCreateUser(dataFromForm)
                    .then(function (data) {
                            spk.success = true;
                            $location.path('/signup/details');
                    });
            };
        }
    }
})();