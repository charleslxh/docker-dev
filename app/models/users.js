'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  mobile: {
    type: String,
    required: true,
    unique: 1
  },
  nickname: {
    type: String,
    required: true
  },
  realname: String,
  age: Number,
  city: String,
  university: String,
  email: String,
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  lastLoginAt: Date,
  loginTimes: {
    type: Number,
    default: 0
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  postCount: {
    type: Number,
    default: 0
  }
})

/**
* Indexes
**/
UserSchema.indexes({ mobile: 1 });
UserSchema.indexes({ nickname: 1 });


/**
* Plugins
**/
UserSchema.plugin(uniqueValidator);


/**
* Instance methods
**/
UserSchema.methods = {};


/**
* Static Methods
**/
UserSchema.statics = {};

module.exports = ['User', UserSchema, 'users'];
