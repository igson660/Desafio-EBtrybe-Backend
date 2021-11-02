const taskService = require('../services/taskService');

const addTask = async (req, res) => {
  const { task } = req.body;
  const { message, status, data } = await taskService.addTask(task);

  if (message) return res.status(status).json({ message: message });

  res.status(status).json(data);
};

const findAllTasks = async (_req, res) => {
  const { status, tasks } = await taskService.findAllTasks();

  res.status(status).json({ tasks });
};

const updateTask = async (req, res) => {
  const { _id, task } = req.body;
  const { message, status, data } = await taskService.updateTask(_id, task);
  if (message) return res.status(status).json(message);

  res.status(status).json({ task: data });
};

const excludeTask = async (req, res) => {
  const { _id } = req.body;
  const result = await taskService.excludeTask(_id);

  if (result) return res.status(result.status).json({ message: result.message });

  res.status(204).send();
};

module.exports = {
  addTask,
  findAllTasks,
  updateTask,
  excludeTask,
};