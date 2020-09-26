$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DragNDrop.feature");
formatter.feature({
  "line": 2,
  "name": "User can drag and drop",
  "description": "I want to automate drag and drop",
  "id": "user-can-drag-and-drop",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7252217093,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can drag and drop",
  "description": "",
  "id": "user-can-drag-and-drop;user-can-drag-and-drop",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on internet homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on drag \u0026 drop",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user land on drag n droppage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user drag a \u0026 drop to b",
  "keyword": "Then "
});
formatter.match({
  "location": "DragNDropStepDef.user_is_on_internet_homepage()"
});
formatter.result({
  "duration": 240400300,
  "status": "passed"
});
formatter.match({
  "location": "DragNDropStepDef.user_clicks_on_drag_drop()"
});
formatter.result({
  "duration": 1726310,
  "error_message": "java.lang.NullPointerException\n\tat com.internet.stepdef.DragNDropStepDef.user_clicks_on_drag_drop(DragNDropStepDef.java:20)\n\tat ✽.When user clicks on drag \u0026 drop(DragNDrop.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "DragNDropStepDef.user_land_on_drag_n_droppage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DragNDropStepDef.user_drag_a_drop_to_b()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 150153982,
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
  "duration": 4460180710,
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
  "duration": 44763483,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_clicks_on_file_upload_link()"
});
formatter.result({
  "duration": 2323150013,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_click_on_choose_file()"
});
formatter.result({
  "duration": 2070111805,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_see_a_windows_drop_down()"
});
formatter.result({
  "duration": 99784,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_select_the_file()"
});
formatter.result({
  "duration": 53530,
  "status": "passed"
});
formatter.match({
  "location": "FileUploadStepDef.user_clicks_on_upload_button()"
});
formatter.result({
  "duration": 2275378541,
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
  "duration": 2037518656,
  "status": "passed"
});
formatter.after({
  "duration": 125655214,
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
  "duration": 4669535270,
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
  "duration": 3213853,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_click_on_frames()"
});
formatter.result({
  "duration": 2241958353,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_lands_on_an_frames_page_clicks_iframe_option()"
});
formatter.result({
  "duration": 2646782798,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_clicks_on_Format_on_the_top_of_the_editor_box_and_select_italic_font()"
});
formatter.result({
  "duration": 4233873180,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_switch_to_iframe()"
});
formatter.result({
  "duration": 2043034822,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.the_user_able_to_write_Hello_this_is_Team_Titans()"
});
formatter.result({
  "duration": 8326050295,
  "status": "passed"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_Come_back_to_the_parent_page()"
});
formatter.result({
  "duration": 6293520,
  "status": "passed"
});
formatter.after({
  "duration": 158747933,
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
  "duration": 5126982523,
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
  "duration": 2808800,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_clicks_on_JavaScript_Alerts()"
});
formatter.result({
  "duration": 2229000617,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_lands_on_alerts_page()"
});
formatter.result({
  "duration": 66555,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertSetpDef.user_clicks_on_JS_alert()"
});
formatter.result({
  "duration": 2088973864,
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
  "duration": 4016674042,
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
  "duration": 2069059619,
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
  "duration": 4018005410,
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
  "duration": 4088739920,
  "status": "passed"
});
formatter.after({
  "duration": 128165584,
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
  "duration": 4611572819,
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
  "duration": 2015059822,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_clicks_on_Multiple_Windows()"
});
formatter.result({
  "duration": 2218521849,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_validate_the_parent_window_page()"
});
formatter.result({
  "duration": 2006585467,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_clicks_on_the_click_here_button()"
});
formatter.result({
  "duration": 2091786772,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_switch_to_new_wondow()"
});
formatter.result({
  "duration": 2018818036,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_validate_the_child_window_page_title()"
});
formatter.result({
  "duration": 2016774180,
  "status": "passed"
});
formatter.match({
  "location": "MultipleWindowsStepDef.user_switch_back_to_the_parent_window()"
});
formatter.result({
  "duration": 4027432284,
  "status": "passed"
});
formatter.after({
  "duration": 136732892,
  "status": "passed"
});
formatter.uri("StatusCode.feature");
formatter.feature({
  "line": 2,
  "name": "Status Code",
  "description": "User should be able to see Status Code message",
  "id": "status-code",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TTS-322"
    },
    {
      "line": 1,
      "name": "@TTS-234"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@statuscodes"
    }
  ]
});
formatter.before({
  "duration": 4517475450,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Title of your scenario",
  "description": "",
  "id": "status-code;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks Status codes",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks 200 Status code",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to get a message",
  "keyword": "Then "
});
formatter.match({
  "location": "StatusCodeStepDef.user_is_at_home_page()"
});
formatter.result({
  "duration": 4408718,
  "status": "passed"
});
formatter.match({
  "location": "StatusCodeStepDef.user_clicks_Status_codes()"
});
formatter.result({
  "duration": 5225574342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 12
    }
  ],
  "location": "StatusCodeStepDef.user_clicks_Status_code(int)"
});
formatter.result({
  "duration": 5192154643,
  "status": "passed"
});
formatter.match({
  "location": "StatusCodeStepDef.user_should_be_able_to_get_a_message()"
});
formatter.result({
  "duration": 29394750,
  "status": "passed"
});
formatter.after({
  "duration": 156265122,
  "status": "passed"
});
formatter.uri("hookForgetPasswordFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Herokapp Forget Password Feature",
  "description": "This forget password is for forget password funcitionality",
  "id": "herokapp-forget-password-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4397782428,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "enter correct email to retrieve password",
  "description": "",
  "id": "herokapp-forget-password-feature;enter-correct-email-to-retrieve-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the user navigates to HerokApp page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on Forget Password button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters correct email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Retrieve Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should get message Your email been sent",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgetPasswordStepDef.the_user_navigates_to_HerokApp_page()"
});
formatter.result({
  "duration": 3763696,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPasswordStepDef.the_user_clicks_on_Forget_Password_button()"
});
formatter.result({
  "duration": 2631293905,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPasswordStepDef.user_enters_correct_email()"
});
formatter.result({
  "duration": 2181612336,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPasswordStepDef.user_clicks_on_Retrieve_Password()"
});
formatter.result({
  "duration": 2757798983,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPasswordStepDef.user_should_get_message_Your_email_been_sent()"
});
formatter.result({
  "duration": 31348,
  "status": "passed"
});
formatter.after({
  "duration": 130105599,
  "status": "passed"
});
});