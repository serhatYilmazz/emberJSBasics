import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos', function() {
    this.route('edit-todo', {path:'/edit-todo/:todo_id'});
  });
});

export default Router;
