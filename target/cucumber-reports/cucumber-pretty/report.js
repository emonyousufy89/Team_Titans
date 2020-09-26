$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DragNDrop.feature");
formatter.feature({
  "line": 2,
  "name": "User can drag and drop",
  "description": "",
  "id": "user-can-drag-and-drop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@theinternetdraganddrop"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 9227804209,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User can drag and drop",
  "description": "",
  "id": "user-can-drag-and-drop;user-can-drag-and-drop",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user navigate to http://the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Drag and Drop",
  "keyword": "Then "
});
formatter.match({
  "location": "DragNDropStepDef.user_navigate_to_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 274529278,
  "status": "passed"
});
formatter.match({
  "location": "DragNDropStepDef.user_clicks_on_Drag_and_Drop()"
});
formatter.result({
  "duration": 1824861,
  "error_message": "java.lang.NullPointerException\n\tat com.internet.stepdef.DragNDropStepDef.user_clicks_on_Drag_and_Drop(DragNDropStepDef.java:21)\n\tat ✽.Then user clicks on Drag and Drop(DragNDrop.feature:8)\n",
  "status": "failed"
});
formatter.after({
  "duration": 102334587,
  "status": "passed"
});
formatter.uri("FileUpload.feature");
formatter.feature({
  "line": 2,
  "name": "Fil upload",
  "description": "I want to upload a from localsystem file",
  "id": "fil-upload",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4945090309,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to upload file",
  "description": "",
  "id": "fil-upload;user-should-be-able-to-upload-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is in internet HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on file upload link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on choose file",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User see a windows drop down",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User select the file",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on upload button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User can see \"File uploaded\"",
  "keyword": "And "
});
formatter.match({
  "location": "FileUploadStepDef.user_is_in_internet_HomePage()"
});
formatter.result({
  "duration": 47128952,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_clicks_on_file_upload_link()"
});
formatter.result({
  "duration": 2357477651,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_click_on_choose_file()"
});
formatter.result({
  "duration": 2070900398,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_see_a_windows_drop_down()"
});
formatter.result({
  "duration": 127544,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_select_the_file()"
});
formatter.result({
  "duration": 72762,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_clicks_on_upload_button()"
});
formatter.result({
  "duration": 2281095927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "File uploaded",
      "offset": 14
    }
  ],
  "location": "FileUploadStepDef.user_can_see(String)"
});
formatter.result({
  "duration": 2043032733,
  "status": "passed"
});
formatter.after({
  "duration": 121288840,
  "status": "passed"
});
formatter.uri("IframeTextboxPositive.feature");
formatter.feature({
  "line": 2,
  "name": "User write in the Iframe text box",
  "description": "As a QA I want automate iframe functionalities",
  "id": "user-write-in-the-iframe-text-box",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4618074828,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to write in the text box switching iframe",
  "description": "",
  "id": "user-write-in-the-iframe-text-box;user-should-be-able-to-write-in-the-text-box-switching-iframe",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on the internet Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user click on frames",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user lands on an frames page \u0026 clicks iframe option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Format on the top of the editor box and select italic font",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user switch to iframe",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user able to write “Hello this is Team Titans”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Come back to the parent page",
  "keyword": "Then "
});
formatter.match({
  "location": "IframeTextPositiveStepDef.the_user_is_on_the_internet_Homepage()"
});
formatter.result({
  "duration": 5110693,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_click_on_frames()"
});
formatter.result({
  "duration": 2232294531,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_lands_on_an_frames_page_clicks_iframe_option()"
});
formatter.result({
  "duration": 2635683157,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_clicks_on_Format_on_the_top_of_the_editor_box_and_select_italic_font()"
});
formatter.result({
  "duration": 4251256328,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_switch_to_iframe()"
});
formatter.result({
  "duration": 2048891225,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.the_user_able_to_write_Hello_this_is_Team_Titans()"
});
formatter.result({
  "duration": 8357911150,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_Come_back_to_the_parent_page()"
});
formatter.result({
  "duration": 6313996,
  "status": "passed"
});
formatter.after({
  "duration": 179373420,
  "status": "passed"
});
formatter.uri("JavaScriptAlert.feature");
formatter.feature({
  "line": 2,
  "name": "JavaScript Alert Handling",
  "description": "I want to handle three different alert",
  "id": "javascript-alert-handling",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5386103527,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to handle all alerts",
  "description": "",
  "id": "javascript-alert-handling;user-should-be-able-to-handle-all-alerts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is on internet homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on JavaScript Alerts",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user lands on alerts page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on JS alert",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User validate the \"I am a JS Alert\" \u0026 clicks ok",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on 2nd alert JS Cofirm",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "USer validate \"I am a JS Confirm\" \u0026 clicks cancel",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on 3rd alert JS prompt \u0026 write \"Team Titan\" \u0026 clicks ok",
  "keyword": "Then "
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_is_on_internet_homepage()"
});
formatter.result({
  "duration": 5688117,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_clicks_on_JavaScript_Alerts()"
});
formatter.result({
  "duration": 2238644167,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_lands_on_alerts_page()"
});
formatter.result({
  "duration": 59140,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_clicks_on_JS_alert()"
});
formatter.result({
  "duration": 2092826841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I am a JS Alert",
      "offset": 19
    }
  ],
  "location": "JavaScriptAlertSetpDef.user_validate_the_clicks_ok(String)"
});
formatter.result({
  "duration": 4018577222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "JavaScriptAlertSetpDef.user_clicks_on_nd_alert_JS_Cofirm(int)"
});
formatter.result({
  "duration": 2077371107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I am a JS Confirm",
      "offset": 15
    }
  ],
  "location": "JavaScriptAlertSetpDef.user_validate_clicks_cancel(String)"
});
formatter.result({
  "duration": 4016936032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "Team Titan",
      "offset": 44
    }
  ],
  "location": "JavaScriptAlertSetpDef.user_clicks_on_rd_alert_JS_prompt_write_clicks_ok(int,String)"
});
formatter.result({
  "duration": 4113744171,
  "status": "passed"
});
formatter.after({
  "duration": 168059884,
  "status": "passed"
});
formatter.uri("MultipleWindow.feature");
formatter.feature({
  "line": 2,
  "name": "Multiple Windows",
  "description": "I want to handle multiple widndows",
  "id": "multiple-windows",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4781765880,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to handle multiple windows",
  "description": "",
  "id": "multiple-windows;user-should-be-able-to-handle-multiple-windows",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is on interenet homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Multiple Windows",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User validate the parent window page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the click here button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User switch to new wondow",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User validate the child window page title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User switch back to the parent window",
  "keyword": "And "
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_is_on_interenet_homepage()"
});
formatter.result({
  "duration": 2026298533,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_clicks_on_Multiple_Windows()"
});
formatter.result({
  "duration": 2274436448,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_validate_the_parent_window_page()"
});
formatter.result({
  "duration": 2010128649,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_clicks_on_the_click_here_button()"
});
formatter.result({
  "duration": 2203310645,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_switch_to_new_wondow()"
});
formatter.result({
  "duration": 2023646058,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_validate_the_child_window_page_title()"
});
formatter.result({
  "duration": 2019466591,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_switch_back_to_the_parent_window()"
});
formatter.result({
  "duration": 4065011951,
  "status": "passed"
});
formatter.after({
  "duration": 131876773,
  "status": "passed"
});
});