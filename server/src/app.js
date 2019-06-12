const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

var Post = require('../models/post')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/posts', {
  useNewUrlParser: true
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})
var Users = require("../src/Users")

app.use("/users", Users)

/////////////////////////////////POSTS///////////////////////////////////////////////
// Add new post
app.post('/posts', (req, res) => {
  var db = req.db
  var title = req.body.title
  var content = req.body.content
  var category = req.body.category
  var image = req.body.image
  var createdAt = req.body.createdAt
  var author = req.body.author

  var new_post = new Post({
    title: title,
    content: content,
    category: category,
    image: image,
    createdAt: createdAt,
    author: author
  })

  new_post.save(function(error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// Fetch all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title content category image createdAt author', function(error, posts) {
    if (error) {
      console.error(error)
    }
    res.send({
      posts: posts
    })
  }).sort({
    _id: -1
  })
})
// Fetch single post
app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title content category image createdAt author', function(error, post) {
    if (error) {
      console.error(error);
    }
    res.send(post)
  })
})

// Update a post
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title content category image createdAt', function(error, post) {
    if (error) {
      console.error(error);
    }

    post.title = req.body.title
    post.content = req.body.content
    post.category = req.body.category
    post.image = req.body.image

    post.save(function(error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})
// Delete a post
app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function (err, post) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})
app.listen(process.env.PORT || 8081)