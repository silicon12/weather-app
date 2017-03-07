Feature: A user of the application can enter a city and get a 5 day forecast
  As a weather application user
  I want to enter a city
  So that I can get a 5 day weather forecast

  Background:
    Given I go to the website "/"

  Scenario Outline: Get a 5 day forecast
    When I enter a <city>
    Then I should see the forecast for "5" days for <city>

    Examples:
      | city      |
      | Aberdeen  |
      | Edinburgh |
      | Dundee    |
      | Perth     |
      | Stirling  |

  Scenario: No report should show for invalid city
    When I enter an invalid city "kljkljkljaa"
    Then No report should show