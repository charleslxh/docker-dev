const Redis = require('ioredis');
const Promise = require('bluebird');

module.exports = () => new Promise((resolve, reject) => {
  if(!process.env.REDIS_URL){
    return reject('REDIS_URL is required.');
  }

  const options = {
    type: 'redis',
    sentinels: [
      {
        host: 'redis_master',
        port: process.env.REDIS_SENTINEL_PORT
      }
    ,
      {
        host: 'redis_slave',
        port: process.env.REDIS_SENTINEL_PORT
      }
    ],
    password: process.env.REDIS_PASSWORD,
    family: 4,
    name: process.env.REDIS_REPLICATION_NAME,
    parser: 'javascript',
    dropBufferSupport: false,
    enableReadyCheck: true,
    connectTimeout: 10 * 1000,
    autoResubscribe: true,
    autoResendUnfulfilledCommands: true
  }

  const client = new Redis(options);

  client.on('error', function(err){
    console.error('Redis connect failed', err);
    reject(err);
  });

  client.on('ready', function(){
    console.log('Redis connected: %s', process.env.REDIS_URL);
    resolve();
  });
});
