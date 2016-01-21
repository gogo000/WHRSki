/*****************************************************************************/
/* ListLesson: Event Handlers */
/*****************************************************************************/
Template.ListLesson.events({
});

/*****************************************************************************/
/* ListLesson: Helpers */
/*****************************************************************************/
Template.ListLesson.helpers({
	lessons: function() {
    	return SkiLessons.find();
  	}
});

/*****************************************************************************/
/* ListLesson: Lifecycle Hooks */
/*****************************************************************************/
Template.ListLesson.onCreated(function () {
});

Template.ListLesson.onRendered(function () {
});

Template.ListLesson.onDestroyed(function () {
});
