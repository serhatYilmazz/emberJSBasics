import Component from '@ember/component';

export default Component.extend({
  todo: null,
  actions: {
    toggleChecked() {
      this.toggleProperty('todo.isDone');
    },
    logOut() {
      this.get('sero')(this.todo.id);
    }
  }
});
