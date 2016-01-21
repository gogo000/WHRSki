SkiLessons = new Mongo.Collection('skiLessons');

SkiLessons.attachSchema(new SimpleSchema({
  date: {
    type: String,
    label: "Date",
    allowedValues: ['Saturday', 'Sunday'],
    max: 100
  },
  location: {
    type: String,
    label: "Ski resort",
    allowedValues: ['Mont Cascade','Mont Ste-Marie','Calabogie'],
    max: 100
  },
  skiType: {
    type: String,
    label: "Ski type",
    allowedValues: ['Ski', 'Snowboard'],
    max: 100
  },
  instructor: {
    type: String,
    label: "Ski Instructor",
    max: 100,
  },
  firstLesson: {
    type: String, //taken by user, (save email)
    label: "9:30 AM",
    defaultValue: 'Empty',
    max: 100,
  },
  secondLesson: {
    type: String, 
    label: "10:30 AM",
    defaultValue: 'Empty',
    max: 100,
  },
  thirdLesson: {
    type: String, 
    label: "11:30 AM",
    defaultValue: 'Empty',
    max: 100,
  },
  fourthLesson: {
    type: String, 
    label: "1:30 PM",
    defaultValue: 'Empty',
    max: 100,
  },
  fifthLesson: {
    type: String, 
    label: "2:30 AM",
    defaultValue: 'Empty',
    max: 100,
  },
  sixthLesson: {
    type: String,
    label: "3:30 AM",
    defaultValue: 'Empty',
    max: 100,
  }
}));

if (Meteor.isServer) {
  SkiLessons.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
