(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        .value('currentMoment', moment().format('MMMM Do YYYY, h:mm:ss a'));
})();