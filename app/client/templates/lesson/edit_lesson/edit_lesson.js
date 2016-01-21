/*****************************************************************************/
/* EditLesson: Event Handlers */
/*****************************************************************************/
Template.EditLesson.events({
});

/*****************************************************************************/
/* EditLesson: Helpers */
/*****************************************************************************/
Template.EditLesson.helpers({
	beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete lesson: "' + doc.date + " " + doc.instructor + '"?')) {
      this.remove();
      Router.go('listLesson');
    }
  };
 }
});

/*****************************************************************************/
/* EditLesson: Lifecycle Hooks */
/*****************************************************************************/
Template.EditLesson.onCreated(function () {
});

Template.EditLesson.onRendered(function () {
});

Template.EditLesson.onDestroyed(function () {
});
