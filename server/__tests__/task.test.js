const Task = require('../models/Task');
const mongoose = require('mongoose');
const dataBase = 'codify-test';
const Axios = require('Axios');

describe('Task', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${dataBase}`
    await mongoose.connect(url, { useNewUrlParser: true })
  })

  afterEach(async () => {
    await Task.deleteMany()
  })

  afterAll(async () => {
    // Removes the Task collection
    await Task.drop() 
  })

  test('Show tasks', async (done) => {
    const res = await Axios.post('http://127.0.0.1/v2/api/tasks', async () => {
      const task = new Task({ task: "Take out the trash" })
      const result = await Task.findOne({ task: "Take out the trash" })
    })
    
    expect(res.body.task).toBeTruthy()
    done();
  })

})