/*****************************************************************************/
/* SelectLesson: Event Handlers */
/*****************************************************************************/
Template.SelectLesson.events({
});

/*****************************************************************************/
/* SelectLesson: Helpers */
/*****************************************************************************/
Template.SelectLesson.helpers({
	lessons: function() {
    	return SkiLessons.find();//using data base query
  	},
  	selectDateData: ['Foo', 'Bar', 'Baz']
});

/*****************************************************************************/
/* SelectLesson: Lifecycle Hooks */
/*****************************************************************************/
Template.SelectLesson.onCreated(function () {
});

Template.SelectLesson.onRendered(function () {
});

Template.SelectLesson.onDestroyed(function () {
});
