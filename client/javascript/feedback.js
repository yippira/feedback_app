import { Meteor } from 'meteor/meteor';

Template.feedback.helpers({
  myTitle:function() {
    return "Feedback App";
  },

checkType:function(type) {
    return type == "mcq";
  }
});
