(function() {
    'use strict';

    describe('User-controller', function() {
        var $state, userId, $controller, vm;
        beforeEach(module('newtestproject'));
        // beforeEach(inject(function(_$state_) {
        //     $state = _$state_;
        //     userId = {
        //         userId: 'admin'
        //     };
        //     vm = $controller('UserController', {
        //         '$state': $state,
        //         'userId': userId
        //     });
        // }));

        it('should define user name', inject(function($controller) {
            var userId = 'admin';
            var vm = $controller('UserController', {
                'userId': userId
            });
            expect(vm.userName).toBe('admin');
        }));
        it('should define user details', inject(function($controller) {
            var userId = 'admin';
            var vm = $controller('UserController', {
                'userId': userId
            });
            expect(vm.userDetails).toBeTruthy();
        }));
    });
})();
