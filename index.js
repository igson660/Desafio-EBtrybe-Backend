const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const { PORT= 3001 } = process.env;
const Task = require('./controllers/taskController');

// app.post('/user', Users.createUser);
app.get('/', Task.findAllTasks);
// app.get('/user/:id', validationToken, Users.UserGetById);


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))