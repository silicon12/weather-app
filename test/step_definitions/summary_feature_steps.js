var expect = require('chai').expect;

module.exports = function() {
    this.When(/I check the summary for day (\d+)/, (dayIndex) => {
        var dayWeatherDom = $$('.summary')[dayIndex];
        dayWeatherDom.click();
    });

    this.Then(/I should see the minimum temperature for (\d+)/, (dayIndex) => {
        var details = $$('.details')[dayIndex];
        var mins = details.$$('.min');
        var minimum = parseInt(mins[0].getText());
        for(let i = 1; i < mins.length; i++) {
            minimum = parseInt(mins[i].getText()) < minimum ? parseInt(mins[i].getText()) : minimum;
        }
        const summary = $$('.summary')[dayIndex];
        const summaryMinimum = parseInt(summary.$('.min').getText());
        expect(minimum).to.equal(summaryMinimum);
    });

    this.Then(/I should see the maximum temperature for (\d+)/, (dayIndex) => {
        var details = $$('.details')[dayIndex];
        var maxs = details.$$('.max');
        var maximum = parseInt(maxs[0].getText());
        for(let i = 1; i < maxs.length; i++) {
            maximum = parseInt(maxs[i].getText()) > maximum ? parseInt(maxs[i].getText()) : maximum;
        }
        const summary = $$('.summary')[dayIndex];
        const summaryMaximum = parseInt(summary.$('.max').getText());
        expect(maximum).to.equal(summaryMaximum);
    });
};