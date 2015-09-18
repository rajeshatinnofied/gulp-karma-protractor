(function() {
    'use strict';

    angular
        .module('newtestproject')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state) {
        var vm = this;
        vm.user = {};
        vm.doLogin = function() {
            if (vm.user.name === 'admin' && vm.user.password === 'password') {
                $state.go('home', {
                    userId: vm.user.name || 'unknown'
                });
            } else {
                $state.go('login');
            }
        };
    }
})();
