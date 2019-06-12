
var mongoose = require("mongoose")
var Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  content: String,
  category: String,
  //image: { data: Buffer, contentType: String },
  createdAt: String,
  author: String
})

var Post = mongoose.model("Post", PostSchema)
//
module.exports = Post
