import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  todos: service('todos'),
  value: null,
  actions: {
    addTodo() {
      let addFunction = this.get('add');
      addFunction(this.get('value'));
    }
  }
});
