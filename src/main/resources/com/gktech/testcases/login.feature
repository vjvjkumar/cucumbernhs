Feature: Upload resume in JOBS NHS Portal

  Scenario Outline: Verify JoBS NHS Login
    Given I open firefox "<browser>"
    When I navigate to "appurl"
    Then I click on "logLink"
    Then I enter "logemail" as "<UserName>"
    Then I enter "logpass" as "<Password>"
    And I click on "logbutton"
    Then I got the "<Home>" page

    Examples: 
      | browser | UserName  | Password    | Home         |
      | Firefox | vktech.vj | testing123  | JOBS NHS     |
      | Firefox | kumar     | selenium123 | My Home Page |
