(function () {
    'use strict';

    angular
        .module('nickoApp.views')
        .factory('fetchJobTypes', fetchJobTypes);

    function fetchJobTypes($firebaseAuth, $firebaseArray, fbRootUrl, authStore) {

        var factoryAPI = {
            jobTypeList: jobTypeList
        };
        return factoryAPI;

        ////////////////

        function jobTypeList() {
            var typeRef = new Firebase(fbRootUrl + '/jobType');
            var typesArray = $firebaseArray(typeRef);

            return typesArray.$loaded()
            .then(function () {
                    //get rid of properties inserted by fbArray
                    for (var i = typesArray.length - 1; i >= 0; i--) {
                        delete typesArray[i].$id;
                        delete typesArray[i].$priority;
                    }
                    //needed so that the select element is presented as expected
                    var pickMeJobType = {
                        type: 'Pick A Job Type'
                    };
                    typesArray.splice(0, 0, pickMeJobType);

                    return typesArray;
            });
        }
    }
})();