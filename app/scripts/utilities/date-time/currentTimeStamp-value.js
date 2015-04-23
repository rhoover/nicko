(function () {
    'use strict';

    angular
        .module('nickoApp.utils')
        // .value('currentTimeStamp', moment().unix(new Date())*1000);
        .value('currentTimeStamp', moment().unix());
})();