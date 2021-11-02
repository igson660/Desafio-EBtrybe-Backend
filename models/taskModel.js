const { ObjectID } = require('mongodb');
const connect = require('./connection');

const addTask = async (Task) => {
  const db = await connect();
  const task = await db.collection('tasks').insertOne({ Task });

  return { task };
};

const findAllTasks = async () => {
  const db = await connect();
  const result = await db.collection('tasks').find().toArray();

  return result;
};

const findByIdTask = async (id) => {
  const db = await connect();
  if (!ObjectID.isValid(id)) return false;
  const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });
  return result;
};


const updateTask = async (id, task) => {
  const db = await connect();
  await db.collection('tasks').updateOne({ _id: ObjectID(id) }, { $set: { task } });
  const result = await findByIdTask(id);
  return result;
};

const excludeTask = async (id) => {
  const db = await connect();
  await db.collection('tasks').deleteOne({ _id: ObjectID(id) });
};

module.exports = {
  addTask,
  findAllTasks,
  updateTask,
  excludeTask
};