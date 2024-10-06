const { model, default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

const posts=mongoose.model("posts",Post)
module.exports ={posts}