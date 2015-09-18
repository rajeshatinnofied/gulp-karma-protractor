(function() {
    'use strict';

    angular
        .module('newtestproject')
        .controller('UserController', UserController);

    /** @ngInject */
    function UserController($state, userId) {
        var vm = this;

        vm.userName = userId;
        vm.userDetails = {};
        vm.doLogout = function() {
            $state.go('login');
        };
    }
})();
