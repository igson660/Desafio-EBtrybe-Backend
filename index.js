const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const { PORT= 3001 } = process.env;
const Task = require('./controllers/taskController');

app.post('/', Task.addTask);
app.get('/', Task.findAllTasks);
app.put('/', Task.updateTask);
app.delete('/', Task.findAllTasks);


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))