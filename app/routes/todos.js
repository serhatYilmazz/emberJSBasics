import Route from '@ember/routing/route';

export default Route.extend({
  lastIndex: 0,
  isEditMode: false,
  model() {
    return this.store.findAll('todo').then((results) => {
      results.forEach(data => {
        this.lastIndex++;
      })
      return results;
    });
  },
  actions: {
    handleLogout(param) {
      if (param.type === 'redirect') {
        this.transitionTo(`todos.edit-todo`, param);
      } else if (param.type === 'delete') {
        this.delete(param.todoId);
      }
    },
    addTodo(newTodo) {
      console.log('FROM ROUTE' + newTodo);
      this.store.push({
        data: [{
          id: ++this.lastIndex,
          type: 'todo',
          attributes: {
            "name": newTodo,
            "is-done": false
          }
        }]
      });
    },
  },
  delete(id) {
    console.log('route');
    this.store.findRecord('todo', id).then((post) => {
      post.destroyRecord();
    });
  }
});
