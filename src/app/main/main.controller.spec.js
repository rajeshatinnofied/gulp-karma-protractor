(function() {
    'use strict';

    describe('controllers', function() {

        beforeEach(module('newtestproject'));

        it('should define more than 5 awesome things', inject(function($controller) {
            var vm = $controller('MainController');

            expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
        }));
    });
})();
