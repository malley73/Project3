const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userListsSchema=new Schema({
  name: {type: String, required: true},
  id: {type: String, required: true}
});

const userSchema = new Schema({
  logon: { type: String, required: true },
  password: { type: String, required: true },
  lists:[userListsSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
