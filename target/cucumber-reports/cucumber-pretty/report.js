$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IframeTextboxPositive.feature");
formatter.feature({
  "line": 2,
  "name": "User write in the Iframe text box",
  "description": "As a QA I want automate iframe functionalities",
  "id": "user-write-in-the-iframe-text-box",
  "keyword": "Feature"
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
  "status": "skipped"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_click_on_frames()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_lands_on_an_frames_page_clicks_iframe_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_clicks_on_Format_on_the_top_of_the_editor_box_and_select_italic_font()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_switch_to_iframe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.the_user_able_to_write_Hello_this_is_Team_Titans()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IframeTextPositiveStepDef.user_Come_back_to_the_parent_page()"
});
formatter.result({
  "status": "skipped"
});
});