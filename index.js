const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())

const { PORT= 3001 } = process.env;
const Task = require('./controllers/taskController');

app.post('/', Task.addTask);
app.get('/', Task.findAllTasks);
app.put('/', Task.updateTask);
app.delete('/', Task.excludeTask);


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))