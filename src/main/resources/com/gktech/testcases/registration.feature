Feature: Upload resume in JOBS NHS
  In order to upload resume
  register in the Portal

  Scenario Outline: Register JOBS NHS
    Given I open firefox "<browser>"
    When I navigate "appurl"
    Then I click on "reglink"
    Then I enter "regfname" as "<RegName>"
    Then I enter "regsurname" as "<SurName>"
    Then I enter "regcountry" as "<Country>"
    Then I enter "regemail" as "<RegEmail>"
    Then I enter "regconfemail" as "<ConfEmail>"
    Then I enter "regpass" as "<RegPass>"
    Then I enter "regconfpass" as "<RegConfPass>"
    Then I enter "regsecques" as "<SecQues>"
    Then I enter "regsecans" as "<SecAns>"
    Then I click on "regcheck"
    Then I click on "regcreate"

    Examples: 
      | browser | RegName   | SurName | Country | RegEmail       | ConfEmail      | RegPass | RegConfPass | SecQues            | SecAns   |
      | Firefox | Govardhan | Karnati | India   | gova@gmail.com | gova@gmail.com | test123 | test123     | A memorable place? | Singapur |
      | Firefox | Vijay     | VVV     | India   | vij@gmail.com  | vij@gmail.com  | java123 | java123     | A memorable place? | Singapur |
