import Service from '@ember/service';

export default Service.extend({
  todoList: null,
  init() {
    this._super(...arguments);
    this.set('todoList', [{
      type: 'todo',
      id: 1,
      attributes: {
        name: 'Take it easy',
        isDone: false
      }
    },
      {
        type: 'todo',
        id: 2,
        attributes: {
          name: 'Now Way!!',
          isDone: true
        }
      }]);
  },
  size() {
    return this.get('todoList').length;
  },
  add(todo) {
    this.todoList.pushObject(todo);
  },

  getById(id) {
    let todo = this.get('todoList');
    let theTodo = todo.find((item) => {
      return item.id === parseInt(id);
    });
    return theTodo;
  },
  deleteByObject(object) {
    this.get('todoList').removeObject(object);
  }
});
