(function() {
    'use strict';

    describe('Main-controller', function() {

        beforeEach(module('newtestproject'));

        it('should define user object', inject(function($controller) {
            var vm = $controller('MainController');

            expect(vm.user).toBeTruthy();
        }));
    });
})();
