$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK Offline application test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "jbk-offline-application-test;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 13,
      "id": "jbk-offline-application-test;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 14,
      "id": "jbk-offline-application-test;login-test;;2"
    },
    {
      "cells": [
        "snehal@gmail.com",
        "12345"
      ],
      "line": 15,
      "id": "jbk-offline-application-test;login-test;;3"
    },
    {
      "cells": [
        "namrata@gmail.com",
        "123345"
      ],
      "line": 16,
      "id": "jbk-offline-application-test;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3253791700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 610350700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 365056300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_login_button()"
});
formatter.result({
  "duration": 225899300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 19753100,
  "status": "passed"
});
formatter.after({
  "duration": 334638600,
  "status": "passed"
});
formatter.before({
  "duration": 1306407700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"snehal@gmail.com\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 333188300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "snehal@gmail.com",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 36
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 296622200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_login_button()"
});
formatter.result({
  "duration": 93117800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 7713800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefination.LoginStepDef.user_should_be_on_home_page(LoginStepDef.java:59)\r\n\tat ✽.Then user should be on home page(login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 85222200,
  "status": "passed"
});
formatter.before({
  "duration": 1252193000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"namrata@gmail.com\" and \"123345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 403742900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "namrata@gmail.com",
      "offset": 13
    },
    {
      "val": "123345",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 288553100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_login_button()"
});
formatter.result({
  "duration": 92407600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 7109400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefination.LoginStepDef.user_should_be_on_home_page(LoginStepDef.java:59)\r\n\tat ✽.Then user should be on home page(login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 226542200,
  "status": "passed"
});
});