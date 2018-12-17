import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {computed} from '@ember/object';

export default Route.extend({
  todos: service('todos'),
  theTodos: computed('todos.[]', function () {
    return this.todos.todoList;
  }),
  model(params) {
    // alert(params.todo_id);
    return this.todos.getById(params.todo_id);
  }
});
