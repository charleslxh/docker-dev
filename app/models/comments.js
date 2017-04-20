'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  commenter: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  lastModifiedAt: Date
})

/**
* Instance methods
**/
CommentSchema.methods = {};


/**
* Static Methods
**/
CommentSchema.statics = {};

module.exports = ['Comment', CommentSchema, 'comments'];
