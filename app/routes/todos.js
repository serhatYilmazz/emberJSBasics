import Route from '@ember/routing/route';

export default Route.extend({
  isEditMode: false,
  model() {
    return this.store.findAll('todo').then((results) => {
      return results;
    });
  },
  actions: {
    handleLogout(param) {
      this.transitionTo(`todos.edit-todo`, param);
    }
  }
});
