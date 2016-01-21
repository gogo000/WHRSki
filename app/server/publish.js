Meteor.publish('skiLessons', function () {
  return SkiLessons.find();
});