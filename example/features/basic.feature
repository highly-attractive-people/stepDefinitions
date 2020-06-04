Feature: Example of using Highly Attractive Step Definitions
As a highly attractive developer
I want to use tools that make me look cool and be more productive
So that I can continue to focus my energy on being sexy

Scenario: Visit a page and confirm some things.
  Given I visit "http://www.usatoday.com/"
  And I click on the "#module-position-OO2QiyNmt9g > span > a" element
  Then the title contains the text "Technology and Electronics  Reviews"
