const express = require("express");
const bodyParser = require('body-parser');
const _ = require("lodash");
const {toDoMocks} = require("./to-do-mocks.ts");

let todos = toDoMocks;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const findIndex = (id) => todos.findIndex(todo=> todo.id === +id);

const handleResponse = (payload, response) => {
    if(!payload)response.status( 404 );
    response.send(payload || { error: 'ToDo not found' });
}

app.listen(3000, function() {
 console.log("listening on 3000");
});

// GET
app.get("/api/users", (request, response) => {
 response.send(todos);
});

app.get("/api/users/:id", (request, response) => {
    const todo = todos[findIndex(+request.params.id)];
    handleResponse(todo, response);
});


// POST
app.post("/api/users", (request, response) => {
    const { body = {} } = request;
    const { status = "", description = "" } = body;
    todos.push({
        id: todos.length + 1,
        status: status,
        description: description
    });
    handleResponse(todos, response);
});

// PUT
app.put("/api/users/:id", (request, response) => {
    const { body = {} } = request;
    const { status = "", description = "" } = body;
    const id = +request.params.id;
    const todo = todos[findIndex(id)];

    if(todo){
        todo.status = status;
        todo.description = description;
        todos[findIndex(id)] = todo;
    }

    handleResponse(todo ? todos : false, response);
});

// Delete
app.delete("/api/users/:id", (request, response) => {
    const index = findIndex(+request.params.id);
    const found = index >= 0;
    if(found) todos = todos.splice(index, 1);
    handleResponse(found ? todos : false, response);
});
