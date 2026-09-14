Feature: hitch-hiker playing scrabble

  Scenario: hitch-hiker playing scrabble in the past
    Given the hitch-hiker selects some tiles
    When they spell 6 times 7
    Then the score is 42
    And the hitch-hiker knows where their towel is
