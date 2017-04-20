'use strict'

const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');
const Promise = require('bluebird');

const register = () => {
  const filenames = fs.readdirSync(path.join(ROOT, 'models'));

  for (const filename of filenames) {
    const [name, schema, collection, skipInit] = require(path.join(ROOT, 'models', filename));
    mongoose.model(name, schema, collection, skipInit);
  };
}

module.exports = () => new Promise((resolve, reject) => {
  if(!process.env.MONGO_URL){
    return Promise.reject('MONGO_URL is required.');
  }

  mongoose.Promise = Promise;

  const options = {
    db: {
      native_parser: true
    },

    promiseLibrary: Promise,

    server: {
      auto_reconnect: false,
      poolSize: 5,
      reconnectTries: Number.MAX_VALUE,
      ssl: false,
      sslValidate: false,
      socketOptions: {
        keepAlive: 1000,
        connectTimeoutMS: 30000
      }
    },

    replset: {
      poolSize: 10,
      connectWithNoPrimary: true,
      ssl: false,
      sslValidate: false,
      socketOptions: {
        keepAlive: 1000,
        connectTimeoutMS: 30000
      }
    }
  };

  mongoose.connection.on('error', function(err){
    console.error('MongoDB connect failed: ', err);
    reject(err);
  });

  mongoose.connection.on('open', function(){
    console.log('MongoDB connected: %s', process.env.MONGO_URL);
    register();
    resolve();
  });

  mongoose.connect(process.env.MONGO_URL, options);
});
