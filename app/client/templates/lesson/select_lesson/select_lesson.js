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
  	selectDateData: function() {
    	return SkiLessons.find();//using data base query
  	},
  	selectLocationData: function() {
    	return SkiLessons.find();//using data base query
  	},
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
