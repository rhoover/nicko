(function () {
    'use strict';

    angular
        .module('nickoApp.boot')
        .config(viewRouting);

        function viewRouting($routeProvider) {

            var dashBoard = function (dashTemplates) {
                return dashTemplates.fetchTemplates();
            };

            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home/home.html',
                    title: 'Nicko Home',
                    controller: 'HomeCtrl',
                    controllerAs: 'spk'
                })
                .when('/signup', {
                    templateUrl: 'partials/signup/signup.html',
                    title: 'Nicko Sign Up',
                    controller: 'SignupCtrl',
                    controllerAs: 'spk'
                })
                .when('/login', {
                    templateUrl: 'partials/login/login.html',
                    title: 'Nicko Log In',
                    controller: 'LoginCtrl',
                    controllerAs: 'spk'
                })
                .when('/signup/details', {
                    templateUrl: 'partials/details/details.html',
                    title: 'Nicko User Details',
                    controller: 'DetailsCtrl',
                    controllerAs: 'spk'
                })
                .when('/dashboard', {
                    templateUrl: 'partials/dashboard/dashboard.html',
                    title: 'Nicko Dashboard',
                    controller: 'DashCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        dashBoard: dashBoard
                    }
                })
                .when('/jobleader', {
                    templateUrl: 'partials/jobleader/jobleader.html',
                    title: 'Nicko Job Leader',
                    controller: 'JobLeaderCtrl',
                    controllerAs: 'spk'
                })
                .otherwise('/', {
                    title: 'Nicko Home'
                });
        }
})();