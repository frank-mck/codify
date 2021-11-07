const Tasks = require('../models/Task');
const mongoose = require('mongoose');
require('dotenv').config();

describe('Task', () => {
  let connection;
  let db;

  beforeAll(async () => {
   connection = await mongoose.connect(process.env.TEST_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true  });
   db = mongoose.connection;
   const collection = process.env.COLLECTION;
   await db.createCollection(collection);
  })

  afterAll(async () => {
    const collection = process.env.COLLECTION;
    Promise.all([
      await db.dropCollection(collection),
      await db.dropDatabase(),
      await db.close()
    ])
  })

  test('Add task POST', async () => {
    const res = await Tasks.create({ task: "take out the trash" });
    await res.save();
    
    expect(res.task).toBe("take out the trash");
  });

  test('Update task POST', async () => {
    const res = await Tasks.create({ task: "take out the trash" });
    await res.save();
    const data = await Tasks.findOneAndUpdate({ _id: res._id }, { task: "Get bin bags" });
    await data.save();
    const updatedTask = await Tasks.findById({_id: res._id })
    expect(updatedTask.task).toBe('Get bin bags');
  })
})
