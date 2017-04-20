'uise strict'

const mongoose = require('mongoose');

const users = require('../data/users');
const posts = require('../data/posts');
const comments = require('../data/comments');

const User = mongoose.model('User');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

module.exports = () => {
  User.remove({})
  .then(() => Post.remove({}))
  .then(() => Comment.remove({}))
  .then(() => User.create(users))
  .then(() => Post.create(posts))
  .then(() => Comment.create(comments))
}
