Feature: The forecast should display a summary of daily data
  As a weather application user
  I want to visit the weather website
  So that I can get a daily forecast summary

  Background:
    Given I go to the website "/"

  Scenario Outline: Summary for each day should be displayed
    When I check the summary for <day>
    Then I should see the minimum temperature for <day>
    And I should see the maximum temperature for <day>

    Examples:
      | day |
      | 0   |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
