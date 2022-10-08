const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  mobile: Number,
  full_name: String,
  username: String,
  password: String,
});

const UserModel = new model("user", UserSchema);

module.exports = { UserModel };
