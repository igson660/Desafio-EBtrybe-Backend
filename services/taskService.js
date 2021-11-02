const { ObjectID } = require('mongodb');
const taskModel = require('../models/taskModel');

const addTask = async (task) => {
  if(!task) return { status: 422, message: 'enter a correct task' }
  const addedtask = await taskModel.addTask(task);

  return { status: 201, data: addedtask };
};

const findAllTasks = async () => {
  const tasks = await taskModel.findAllTasks();

  return {status: 200, tasks };
};

const updateTask = async (id, task) => {
  const checkedId = ObjectID.isValid(id);
  if (!checkedId) return { status: 404, message: 'task not found' };

  const result = await taskModel.updateTask(id, task);
  return { status: 200, data: result.task };
};

const excludeTask = async (id) => {
  const checkedId = ObjectID.isValid(id);
  if (!checkedId) return { status: 404, message: 'task not found' };
  
  await taskModel.excludeTask(id);
};

module.exports = {
  addTask,
  findAllTasks,
  updateTask,
  excludeTask,
};