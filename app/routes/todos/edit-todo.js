import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    // alert(params.todo_id);
    return this.store.findRecord('todo', params.todo_id);
  }
});
