'use strict';

describe('The main view', function() {
    var page;

    beforeEach(function() {
        browser.get('/index.html');
        page = require('./main.po');
        browser.driver.manage().window().setSize(1280, 760);
    });

    it('should include a user name filed', function() {
        expect(page.userName.getText()).toBe('');
    });

    it('should include a password field', function() {
        expect(page.userPass.getText()).toBe('');
    });
    it('should change value of username', function() {
        page.userName.sendKeys('newusername');
        expect(page.userName.getAttribute('value')).toBe('newusername');
    });
    it('should change state if clicked on submit and user name password match', function() {
        browser.get('/');
        page.userName.sendKeys('admin');
        page.userPass.sendKeys('password');

        page.submitButton.click();

        expect(browser.getLocationAbsUrl()).toMatch('/home/admin');

        var userPage = require('./user.po');
        expect(userPage.userText.getText()).toBe('Welcome admin');
        userPage.userDetails.sendKeys('hello this is some details user');
        expect(userPage.userDetails.getAttribute('value')).toBe('hello this is some details user');
        userPage.logoutButton.click();
        expect(browser.getLocationAbsUrl()).toMatch('/login');
    });

    it('should not change state if username password does not match', function() {
        browser.get('/');
        page.userName.sendKeys('user');
        page.userPass.sendKeys('password');

        page.submitButton.click();

        expect(browser.getLocationAbsUrl()).toMatch('/login');
    });

    it('should reset then fields if click on reset', function() {
        browser.get('/');
        page.userName.sendKeys('realy a long user name');
        page.userPass.sendKeys('and a big password too');

        page.resetButton.click();

        expect(browser.getLocationAbsUrl()).toMatch('/login');

        expect(page.userName.getAttribute('value')).toBe('');
        expect(page.userPass.getAttribute('value')).toBe('');
    });
});
