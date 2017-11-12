const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name:{type:String},
  checked:{type:Boolean}
});

const listSchema = new Schema({
  list: { type: String, required: true },
  items: [itemSchema],
  users: [String]
});

const List = mongoose.model("List", listSchema);

module.exports = List;
