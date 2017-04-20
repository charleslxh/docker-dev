'use strict'

const path = require('path');
const Promise = require('bluebird');

exports.boot = (app) => {
  process.on('uncaughtException', err => {
    console.error('Uncaught', err);
  });

  return require('./mongoose')()
  .then(() => {
    return require('./redis')();
  })
  .then(() => {
    return require('./initMongoData')();
  })
  .then(() => {
    console.log('Booted');
  })
  .catch((err) => {
    console.error('Boot failed: ', err);
  })
}
