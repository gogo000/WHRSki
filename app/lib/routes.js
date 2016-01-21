Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/lesson/create_lesson', {
  name: 'createLesson',
  controller: 'SkiLessonsController',
  action: 'create',
  where: 'client'
});

Router.route('/lesson', {
  name: 'listLesson',
  controller: 'SkiLessonsController',
  action: 'list',
  where: 'client'
});

Router.route('/lesson/:_id', {
  name: 'editLesson',
  controller: 'SkiLessonsController',
  action: 'edit',
  where: 'client'
});

Router.route('/select_lesson', {
  name: 'selectLesson',
  controller: 'SkiLessonsController',
  action: 'select',
  where: 'client'
});
