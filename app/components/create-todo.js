import Component from '@ember/component';

export default Component.extend({
  value: null,
  actions: {
    addTodo() {
      let addFunction = this.get('add');
      addFunction(this.get('value'));
    }
  }
});
