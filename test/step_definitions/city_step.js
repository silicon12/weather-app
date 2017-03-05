const expect = require('chai').expect;

module.exports = function() {
    this.When(/I enter a ([^"]*)/, (city) => {
        browser.setValue('#city', city)
        browser.submitForm('form');
        browser.pause(1000);
    });

    this.Then(/I should see the forecast for "(\d+)" days for ([^"]*)/, (days, city) => {
        expect(browser.getValue('#city')).to.equal(city);
        expect(browser.elements('.summary').value).to.have.length(days);
    });

    this.When(/I enter an invalid city "([^"]*)"/, (city) => {
        browser.setValue('#city', city);
        browser.submitForm('form');
        browser.pause(1000);
    });

    this.Then(/No report should show/, () => {
        expect(browser.elements('.summary').value).to.have.length(0);
    });
};