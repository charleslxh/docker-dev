'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  poster: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  lastModifiedAt: Date
})

/**
* Instance methods
**/
PostSchema.methods = {};


/**
* Static Methods
**/
PostSchema.statics = {};

module.exports = ['Post', PostSchema, 'posts'];
