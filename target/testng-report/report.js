$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\gktech\\testcases\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Upload resume in JOBS NHS Portal",
  "description": "In order to get the good job\r\nwe have to upload our resume in jobs nhs.",
  "id": "upload-resume-in-jobs-nhs-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify JoBS NHS Login",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"logLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"logemail\" as \"\u003cUserName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logpass\" as \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"\u003cHome\u003e\" page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;",
  "rows": [
    {
      "cells": [
        "browser",
        "UserName",
        "Password",
        "Home"
      ],
      "line": 15,
      "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;1"
    },
    {
      "cells": [
        "Firefox",
        "vardhan.kg",
        "testing123",
        "JOBS NHS"
      ],
      "line": 16,
      "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;2"
    },
    {
      "cells": [
        "Firefox",
        "karnati",
        "selenium123",
        "My Home Page"
      ],
      "line": 17,
      "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify JoBS NHS Login",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"Firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"logLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"logemail\" as \"vardhan.kg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logpass\" as \"testing123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"JOBS NHS\" page.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "Login.I_Open(String)"
});
formatter.result({
  "duration": 30561026989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "Login.I_navigate(String)"
});
formatter.result({
  "duration": 16853512646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logLink",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 430093339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logemail",
      "offset": 9
    },
    {
      "val": "vardhan.kg",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 140181895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logpass",
      "offset": 9
    },
    {
      "val": "testing123",
      "offset": 22
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 93289646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logbutton",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 1486525657,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Verify JoBS NHS Login",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"Firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"logLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"logemail\" as \"karnati\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logpass\" as \"selenium123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"My Home Page\" page.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "Login.I_Open(String)"
});
formatter.result({
  "duration": 10398076994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "Login.I_navigate(String)"
});
formatter.result({
  "duration": 1792353131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logLink",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 249229164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logemail",
      "offset": 9
    },
    {
      "val": "karnati",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 87047103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logpass",
      "offset": 9
    },
    {
      "val": "selenium123",
      "offset": 22
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 93065200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logbutton",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 2122530537,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("main\\resources\\com\\gktech\\testcases\\registration.feature");
formatter.feature({
  "line": 1,
  "name": "Upload resume in JOBS NHS",
  "description": "In order to upload resume\r\nregister in the Portal",
  "id": "upload-resume-in-jobs-nhs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"reglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"regfname\" as \"\u003cRegName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regsurname\" as \"\u003cSurName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regcountry\" as \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regemail\" as \"\u003cRegEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \"regconfemail\" as \"\u003cConfEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regpass\" as \"\u003cRegPass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"regconfpass\" as \"\u003cRegConfPass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"regsecques\" as \"\u003cSecQues\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"regsecans\" as \"\u003cSecAns\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"regcheck\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \"regcreate\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;",
  "rows": [
    {
      "cells": [
        "browser",
        "RegName",
        "SurName",
        "Country",
        "RegEmail",
        "ConfEmail",
        "RegPass",
        "RegConfPass",
        "SecQues",
        "SecAns"
      ],
      "line": 26,
      "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;1"
    },
    {
      "cells": [
        "Firefox",
        "Govardhan",
        "Karnati",
        "India",
        "gova@gmail.com",
        "gova@gmail.com",
        "test123",
        "test123",
        "A memorable place?",
        "Singapur"
      ],
      "line": 27,
      "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;2"
    },
    {
      "cells": [
        "Firefox",
        "Vijay",
        "VVV",
        "India",
        "vij@gmail.com",
        "vij@gmail.com",
        "java123",
        "java123",
        "A memorable place?",
        "Singapur"
      ],
      "line": 28,
      "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"Firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"reglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"regfname\" as \"Govardhan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regsurname\" as \"Karnati\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regcountry\" as \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regemail\" as \"gova@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \"regconfemail\" as \"gova@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regpass\" as \"test123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"regconfpass\" as \"test123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"regsecques\" as \"A memorable place?\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"regsecans\" as \"Singapur\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"regcheck\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \"regcreate\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "Login.I_Open(String)"
});
formatter.result({
  "duration": 27932717081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "Login.I_navigate(String)"
});
formatter.result({
  "duration": 2306237991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reglink",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 333879649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regfname",
      "offset": 9
    },
    {
      "val": "Govardhan",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 4307351297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsurname",
      "offset": 9
    },
    {
      "val": "Karnati",
      "offset": 25
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 3114660203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcountry",
      "offset": 9
    },
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 93437343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regemail",
      "offset": 9
    },
    {
      "val": "gova@gmail.com",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 182342930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regconfemail",
      "offset": 9
    },
    {
      "val": "gova@gmail.com",
      "offset": 27
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 262899841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regpass",
      "offset": 9
    },
    {
      "val": "test123",
      "offset": 22
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 191800895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regconfpass",
      "offset": 9
    },
    {
      "val": "test123",
      "offset": 26
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 121030810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecques",
      "offset": 9
    },
    {
      "val": "A memorable place?",
      "offset": 25
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 119426221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecans",
      "offset": 9
    },
    {
      "val": "Singapur",
      "offset": 24
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 107866140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcheck",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 222118948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcreate",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 1344796736,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"Firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"reglink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"regfname\" as \"Vijay\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regsurname\" as \"VVV\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regcountry\" as \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regemail\" as \"vij@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \"regconfemail\" as \"vij@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regpass\" as \"java123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"regconfpass\" as \"java123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"regsecques\" as \"A memorable place?\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"regsecans\" as \"Singapur\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"regcheck\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \"regcreate\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "Login.I_Open(String)"
});
formatter.result({
  "duration": 16267212952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "Login.I_navigate(String)"
});
formatter.result({
  "duration": 2848272748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reglink",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 248139955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regfname",
      "offset": 9
    },
    {
      "val": "Vijay",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 3898019878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsurname",
      "offset": 9
    },
    {
      "val": "VVV",
      "offset": 25
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 149788450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcountry",
      "offset": 9
    },
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 143165286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regemail",
      "offset": 9
    },
    {
      "val": "vij@gmail.com",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 207333181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regconfemail",
      "offset": 9
    },
    {
      "val": "vij@gmail.com",
      "offset": 27
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 247157390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regpass",
      "offset": 9
    },
    {
      "val": "java123",
      "offset": 22
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 281295040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regconfpass",
      "offset": 9
    },
    {
      "val": "java123",
      "offset": 26
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 102342894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecques",
      "offset": 9
    },
    {
      "val": "A memorable place?",
      "offset": 25
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 187137952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regsecans",
      "offset": 9
    },
    {
      "val": "Singapur",
      "offset": 24
    }
  ],
  "location": "Login.I_enter_uname(String,String)"
});
formatter.result({
  "duration": 172812678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcheck",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 245574667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regcreate",
      "offset": 12
    }
  ],
  "location": "Login.I_click(String)"
});
formatter.result({
  "duration": 1223556206,
  "status": "passed"
});
});