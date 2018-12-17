export default function () {
  this.namespace = '/api'


  let todos = [{
    type: 'todo',
    id: 1,
    attributes: {
      name: 'Take it easy',
      "is-done": false
    }
  },
    {
      type: 'todo',
      id: 2,
      attributes: {
        name: 'Now Way!!',
        "is-done": true
      }
    }];

  let get = this.get('/todos', function (db, request) {
    return {data: todos};
  });

  this.get('/todos/:todo_id', function (db, request) {
    // alert(request.params.todo_id);
    return {data: todos.find((todo) => parseInt(request.params.todo_id) === parseInt(todo.id))};
  });
  
  this.delete('/todos/:todo_id', function (db, request) {
    console.log(request);
    return get();
  })

  this.post('/todos/addData', function (db, request) {

  })
}
