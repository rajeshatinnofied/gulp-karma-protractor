/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var UserPage = function() {
    this.userText = element.all(by.tagName('h2')).first();
    this.logoutButton = element(by.buttonText('Logout'));
    this.userDetails = element(by.model('vm.userDetails.text'));
};


module.exports = new UserPage();
