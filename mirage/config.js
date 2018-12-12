export default function () {
  this.namespace = '/api'


  let todos = [{
    type: 'todos',
    id: 1,
    attributes: {
      name: 'Take it easy',
      "is-done": false
    }
  },
    {
      type: 'todos',
      id: 2,
      attributes: {
        name: 'Now Way!!',
        "is-done": true
      }
    }];

  this.get('/todos', function (db, request) {
    return {data: todos};
  });

  this.get('/todos/:todo_id', function (db, request) {
    // alert(request.params.todo_id);
    return {data: todos.find((todo) => parseInt(request.params.todo_id) === parseInt(todo.id))};
  })
}
