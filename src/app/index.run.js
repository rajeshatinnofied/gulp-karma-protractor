(function() {
  'use strict';

  angular
    .module('newtestproject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
