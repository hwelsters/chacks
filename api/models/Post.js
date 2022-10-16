const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    userId: { type: String },
    username: { type: String },
    pickup: { type: String },
    dropoff: { type: String },
    text: { type: String },
    accepted: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HITCHHIKE_Post", PostSchema);
