const Tasks = require("../Task");
const TestDatabase = require("../../TestDatabase");
require("dotenv").config();

describe("Task", () => {
  beforeAll(async () => {
    await TestDatabase.connect();
  });

  afterAll(async () => {
    await TestDatabase.disconnect();
  });

  test("Add task POST", async () => {
    const res = await Tasks.create({ task: "take out the trash" });
    await res.save();
    expect(res.task).toBe("take out the trash");
  });

  test("Update task PUT", async () => {
    const res = await Tasks.create({ task: "take out the trash" });
    await res.save();
    const data = await Tasks.findOneAndUpdate(
      { _id: res._id },
      { task: "Get bin bags" },
    );
    await data.save();
    const updatedTask = await Tasks.findById({ _id: res._id });
    expect(updatedTask.task).toBe("Get bin bags");
  });

  test("Delete task DELETE", async () => {
    const res = await Tasks.create({ task: "take out the trash" });
    await res.save();
    const task = await Tasks.findByIdAndDelete({ _id: res._id });
    await task.delete();
    const deletedTask = await Tasks.findById({ _id: res._id });
    expect(deletedTask).toBe(null);
  });
});
