const taskService = require('../services/taskService');

const addTask = async (req, res) => {
  const { task } = req.body;
  const result = await taskService.addTask(task);

  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(201).json({ result });
};

const findAllTasks = async (_req, res) => {
  const tasks = await userService.findAllTasks();

  res.status(200).json({ tasks });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const { status, data, err } = await userService.updateTask(id, req.body, _id);
  if (err) return res.status(status).json(err);

  res.status(status).json(data);
};

const excludeTask = async (req, res) => {
  const { id } = req.params;

  const result = await userService.excludeTask(id);

  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(204).send();
};

module.exports = {
  addTask,
  findAllTasks,
  updateTask,
  excludeTask,
};