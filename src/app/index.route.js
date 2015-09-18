(function() {
    'use strict';

    angular
        .module('newtestproject')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('home', {
                url: '/home/{userId:string}',
                templateUrl: 'app/user/user.html',
                controller: 'UserController',
                controllerAs: 'vm',
                resolve: {
                    userId: function($stateParams) {
                        return $stateParams.userId;
                    }
                }
            });

        $urlRouterProvider.otherwise('/login');
    }

})();
