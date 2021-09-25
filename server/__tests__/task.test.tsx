const Task = require('../models/Task');
const mongoose = require('mongoose');
require('dotenv').config();

describe('Task', () => {
  let connection: any;
  let db: { createCollection: (arg0: string) => any; dropCollection: (arg0: string) => any; dropDatabase: () => any; close: () => any; };

  beforeAll(async () => {
   connection = await mongoose.connect(process.env.TEST_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true  });
   db = mongoose.connection;
   const collection = process.env.COLLECTION;
   await db.createCollection(collection);
  })

  afterAll(async () => {
    const collection = process.env.COLLECTION;
    await db.dropCollection(collection);
    await db.dropDatabase();
    await db.close();
  })

  test('Add task POST', async () => {
    const res = await Task.create({ task: "take out the trash" });
    await res.save();
    
    expect(res.task).toBe("take out the trash");
  })
})
