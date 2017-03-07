Feature: A user of the application can select a day and get forecast information
  As a weather application user
  I want to select a day
  So that I can get a short term forecast

  Background:
    Given I go to the website "/"

  Scenario Outline: User selects a day
    When I click on day <day>
    Then The details for day <day> should dropdown
    And I should see the correct 3 <hourly> forecast for <day>

    Examples:
      | day	| hourly |
      | 0   |   3    |
      | 1   |   3    |
      | 2 	|   3    |
      | 3  	|   3    |
      | 4   |   3    |

  Scenario Outline: User selects a day twice will hide the visible forecast
    When I click on day <day>
    And I click on the same <day> again
    Then the currently visible forecast for <day> will be hidden

    Examples:
      | day	|
      | 0   |
      | 1   |
      | 2 	|
      | 3  	|
      | 4   |

  Scenario Outline: User selects an alternative day will hide the previous forecast
    When I click on day <day>
    And I click on day <alternative_day>
    Then the forecast for <day> will be hidden

    Examples:
      | day	| alternative_day |
      | 0   | 1				  |
      | 1   | 2       	      |
      | 2 	| 3        		  |
      | 3  	| 4          	  |
      | 4   | 0          	  |