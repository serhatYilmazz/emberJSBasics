import Component from '@ember/component';

export default Component.extend({
  todo: null,
  actions: {
    toggleChecked() {
      this.toggleProperty('todo.isDone');
    },
    logOut() {
      this.get('sero')({todoId: this.todo.id, type: 'redirect'});
    },
    deleteTodo() {
      console.log('to-do component');
      this.get('sero')({todoId: this.todo.id, type: 'delete'});
    }
  }
});
