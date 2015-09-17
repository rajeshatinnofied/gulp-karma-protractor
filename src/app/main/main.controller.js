(function() {
    'use strict';

    angular
        .module('newtestproject')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;

        vm.awesomeThings = [1, 2, 3, 4, 5];
        vm.classAnimation = '';
        vm.creationDate = 1442464093282;
    }
})();
