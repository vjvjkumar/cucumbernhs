Feature: Upload resume in JOBS NHS Portal
  
  In order to get the good job
  we have to upload our resume in jobs nhs.

  Scenario Outline: Verify JoBS NHS Login
    Given I open firefox "<browser>"
    When I navigate "appurl"
    Then I click on "logLink"
    Then I enter "logemail" as "<UserName>"
    Then I enter "logpass" as "<Password>"
    And I click on "logbutton"
    Then I got the "<Home>" page.

    Examples: 
      | browser | UserName   | Password    | Home         |
      | Firefox | vardhan.kg | testing123  | JOBS NHS     |
      | Firefox | karnati    | selenium123 | My Home Page |
