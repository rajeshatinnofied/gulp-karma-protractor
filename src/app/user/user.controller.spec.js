(function() {
    'use strict';

    describe('User-controller', function() {
        beforeEach(module('newtestproject'));

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
