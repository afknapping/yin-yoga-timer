Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: app starts
    Then I should see the time budget displayed

  Scenario: Increase Time Budget
    When I click on the time budget increase button 3 times
    Then the time budget shoud be 3 times higher than before



# 'UINodeTimeBudget': $('#TimeBudgetDisplay')
# click on the time budget


# When I increase the time budget by 3