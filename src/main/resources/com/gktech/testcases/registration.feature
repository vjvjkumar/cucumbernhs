Feature: Upload resume in JOBS NHS
  
  In order to upload resume
  register in the Portal

  Scenario Outline: Register JOBS NHS
    Given I open firefox "<browser>"
    When I navigate to "appurl"
    Then I click on "reglink"
    And I enter "regfname" as "<RegName>"
    And I enter "regsurname" as "<SurName>"
    And I enter "regcountry" as "<Country>"
    And I enter "regemail" as "<RegEmail>"
    And I enter "regconfemail" as "<ConfEmail>"
    And I enter "regpass" as "<RegPass>"
    And I enter "regconfpass" as "<RegConfPass>"
    And I enter "regsecques" as "<SecQues>"
    And I enter "regsecans" as "<SecAns>"
    Then I click on "regcheck"
    Then I click on "regcreate"

    Examples: 
      | browser | RegName | SurName | Country | RegEmail         | ConfEmail        | RegPass | RegConfPass | SecQues           | SecAns   |
      | Firefox | vktech  | kumar   | India   | vktech@gmail.com | vktech@gmail.com | test123 | test123     | A memorable place | Singapur |
      | Firefox | Vijay   | VVV     | India   | vij@gmail.com    | vij@gmail.com    | java123 | java123     | A memorable place | Singapur |
