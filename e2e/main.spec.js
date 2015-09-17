'use strict';

describe('The main view', function() {
    var page;

    beforeEach(function() {
        browser.get('/index.html');
        page = require('./main.po');
    });

    it('should include jumbotron with correct data', function() {
        expect(page.h1El.getText()).toBe('Test with karma and protractor');
    });

    it('should list more than 4 awesome things', function() {
        expect(page.thumbnailEls.count()).toBeGreaterThan(4);
    });

});
