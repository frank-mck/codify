const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Have you taken out the trash?"],
    },
    complete: {
      type: Boolean,
      ref: "User",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
