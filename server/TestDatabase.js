const mongoose = require('mongoose');

class TestDb {
  db;
  connection;

  async connect() {
    this.connection = await mongoose.connect(process.env.TEST_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true  });
    this.db = mongoose.connection;
    const collection = process.env.TASK_COLLECTION;
    await this.db.createCollection(collection);
  }

  async disconnect() {
    const collection = process.env.TASK_COLLECTION;
    Promise.all([
      await this.db.dropCollection(collection),
      await this.db.dropDatabase(),
      await this.db.close()
    ])
  }
}

const TestDatabase = new TestDb();

module.exports = TestDatabase;