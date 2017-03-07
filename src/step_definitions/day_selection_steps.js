const expect = require('chai').expect;

module.exports = function () {
    this.When(/^I click on day ([^"]*)$/, (dayIndex) => {
        var dayWeatherDom = $$('.summary')[dayIndex];
        dayWeatherDom.click();
        var details = $$('.details')[dayIndex];
        browser.waitUntil(() => {
            return details.getCssProperty('max-height').parsed.value === 2000;
        }, 1000);
    });

    this.When(/I click on the same (\d+) again/, (dayIndex) => {
        var dayWeatherDom = $$('.summary')[dayIndex];
        dayWeatherDom.click();
    });

    this.Then(/the currently visible forecast for (\d+) will be hidden/, (dayIndex) => {
        var details = $$('.details')[dayIndex];
        browser.waitUntil(() => {
            return details.getCssProperty('max-height').parsed.value === 0;
        }, 1000);
        expect(details.getCssProperty('max-height').parsed.value).to.be.equal(0);
    });

    this.Then(/The details for day ([^"]*) should dropdown/, (dayIndex) => {
        var details = $$('.details')[dayIndex];
        expect(details.getCssProperty('max-height').parsed.value).to.be.above(0);
    });

    this.Then(/I should see the correct 3 (\d+) forecast for (\d+)/, (hour, dayIndex) => {
        var details = $$('.details')[dayIndex];
        var hourlyDetails = details.$$('.hour');
        var current = parseInt(hourlyDetails[0].getText());
        for(let i = 1; i < hourlyDetails.length; i++) {
            current += (hour * 100);
            expect(parseInt(hourlyDetails[i].getText())).to.equal(current);
        }
    });

    this.Then(/the forecast for (\d+) will be hidden/, (dayIndex) => {
        var details = $$('.details')[dayIndex];
        browser.waitUntil(() => {
            return details.getCssProperty('max-height').parsed.value === 0;
        }, 1000);
        expect(details.getCssProperty('max-height').parsed.value).to.be.equal(0);
    });
};