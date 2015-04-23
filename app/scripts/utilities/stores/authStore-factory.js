(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .factory('authStore', authStore);

    function authStore($cacheFactory) {

        var factoryAPI = {
            setCache: setCache,
            fetchCache: fetchCache,
            setloginCache: setloginCache,
            fetchloginCache: fetchloginCache,
            setSignupCache: setSignupCache,
            fetchSignupCache: fetchSignupCache
        };
        return factoryAPI;

        ////////////////

        function setCache(authData) {
            var auth = $cacheFactory('authObject');
            auth.put('authObject', authData);
        }

        function fetchCache() {
            var authStuff = $cacheFactory.get('authObject').get('authObject');
            return authStuff;
        }

        function setloginCache(loginData) {
            var login = $cacheFactory('loginObject');
            login.put('loginObject', loginData);
        }

        function fetchloginCache() {
            //aka: $cachefactory.get(ID).get(key);
            var loginStuff = $cacheFactory.get('loginObject').get('loginObject');
            return loginStuff;
        }

        function setSignupCache(signupData) {
            var signup = $cacheFactory('signupObject');
            signup.put('signupObject', signupData);
        }

        function fetchSignupCache() {
            var signupStuff = $cacheFactory.get('signupObject').get('signupObject');
            return signupStuff;
        }
    }
})();