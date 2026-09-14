Feature: hitch-hiker playing scrabble

  Scenario: hitch-hiker playing scrabble in the past
    Given the hitch-hiker selects some tiles
    When they spell 6 times 9
    Then the score is 42

  Scenario: the answer is two digits long
    Given the hitch-hiker selects some tiles
    When they spell 6 times 7
    Then the score has 2 digits

  Scenario: the answer is an even number
    Given the hitch-hiker selects some tiles
    When they spell 6 times 7
    Then the score is even
