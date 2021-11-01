const { ObjectID } = require('mongodb');
const taskModel = require('../models/taskModel');

const addTask = async (task) => {
  const addedtask = await taskModel.addTask(task);

  return addedtask;
};

const findAllTasks = async () => {
  const tasks = await taskModel.findAllTasks();

  return tasks;
};

const updateTask = async (id, task) => {
  const checkedId = ObjectID.isValid(id);
  if (!checkedId) return { status: 404, err: { message: 'task not found' } };

  const task = await taskModel.updateTask(id, task);
  return { status: 200, data: task };
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