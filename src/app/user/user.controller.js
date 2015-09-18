(function() {
    'use strict';

    angular
        .module('newtestproject')
        .controller('UserController', MainController);

    /** @ngInject */
    function MainController($state, userId) {
        var vm = this;

        vm.userName = userId;
        vm.userDetails = {};
        vm.doLogout = function() {
            $state.go('login');
        };
    }
})();
