var Test = require("../lib/example-base-test-class");
var resultMs = "automationtest";
module.exports = new Test({
  
  "Create Todo": function (client) {
    client
      .clickMobileEl("id","fab_add_task")
      .setMobileElValue("id","add_task_title",resultMs)
      .clickMobileEl("id","fab_edit_task_done")
    },
    
  "Check Todo": function (client) {
    client
      .assert.equal(resultMs,'automationtest');
  },
  
  "Delete Todo": function (client) {
    client
      .clickMobileEl("id","title")
      .clickMobileEl("id","menu_delete")
  } 
  
});