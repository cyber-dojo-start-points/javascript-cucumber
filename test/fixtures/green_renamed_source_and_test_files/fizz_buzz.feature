Feature: counting off in fizz-buzz

  Scenario: fifteen is divisible by three and by five
    Given a fizz-buzz counter
    When it counts off 15
    Then it says FizzBuzz
