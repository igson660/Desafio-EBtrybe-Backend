const taskService = require('../services/taskService');

const addTask = async (req, res) => {
  const { task } = req.body;
  const result = await taskService.addTask(task);

  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json({ task: result.task });
};

const findAllTasks = async (_req, res) => {
  const result = await taskService.findAllTasks();

  res.status(result.status).json({ task: result.tasks });
};

const updateTask = async (req, res) => {
  const { _id, task } = req.body;
  const result = await taskService.updateTask(_id, task);
  if (result.err) return res.status(result.status).json(result.err);

  res.status(result.status).json(result.data);
};

const excludeTask = async (req, res) => {
  const { id } = req.params;

  const result = await taskService.excludeTask(id);

  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(204).send();
};

module.exports = {
  addTask,
  findAllTasks,
  updateTask,
  excludeTask,
};