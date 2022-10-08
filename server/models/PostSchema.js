const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  caption: String,
  image: String,
  userId: String,
  comments: [],
});

const PostModel = new model("post", PostSchema);

module.exports = { PostModel };
