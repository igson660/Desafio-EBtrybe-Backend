const express = require('express');
const app = express();
const { PORT } = process.env;

const Task = require('./controllers/taskController');


// app.post('/user', Users.createUser);
app.get('/user', Task.GetAll);
// app.get('/user/:id', validationToken, Users.UserGetById);


app.listen(PORT, () => console.log('Rodando na porta 3001'))