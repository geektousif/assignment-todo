const mongoose = require("mongoose");
// const User = require("./User");

const todoSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    tasks: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
