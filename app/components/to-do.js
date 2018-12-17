import Component from '@ember/component';

export default Component.extend({
  todo: null,
  actions: {
    toggleChecked() {
      this.toggleProperty('todo.attributes.isDone');
    },
    logOut() {
      this.get('sero')({todoId: this.todo.id, type: 'redirect'});
    },
    deleteTodo() {
      this.get('sero')({todoId: this.todo, type: 'delete'});
    }
  }
});
