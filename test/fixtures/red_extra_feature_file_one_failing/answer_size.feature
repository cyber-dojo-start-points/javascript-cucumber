# A feature file added beyond the one the kata ships with. cyber-dojo.sh
# hands cucumber every .feature file in the sandbox, so this one is run too,
# and its scenario disagrees with an answer of two digits.
Feature: how long the answer is

  Scenario: the answer is three digits long
    Given the hitch-hiker selects some tiles
    When they spell 6 times 7
    Then the score has 3 digits
