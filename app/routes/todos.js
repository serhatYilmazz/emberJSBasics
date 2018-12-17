import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  todos: service('todos'),
  lastIndex: 0,
  isEditMode: false,
  init() {
    this._super(...arguments);
    let size = this.todos.size();
    this.set('lastIndex', size);
  },
  model() {
    return this.todos.todoList;
  },
  actions: {
    handleLogout(param) {
      if (param.type === 'redirect') {
        this.transitionTo(`todos.edit-todo`, param.todoId);
      }
      else if (param.type === 'delete') {
        this.delete(param.todoId);
      }
    },
    addTodo(newTodo) {
      this.todos.add({
        id: ++this.lastIndex,
        type: 'todo',
        attributes: {
          "name": newTodo,
          "is-done": false
        }
      });
    },
  },
  delete(object) {
    this.todos.deleteByObject(object);
    this.transitionTo('todos');
  }
});
