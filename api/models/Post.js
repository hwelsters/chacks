const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    img: { type: String },
    text: { type: String, required: true },
    likes: { type: Number, required: true },
    emotion: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HITCHHIKE_Post", PostSchema);
