'use strict'

const http = require('http');
const path = require('path');

const express = require('express');
const pug = require('pug');
const Promise = require('bluebird');

const app = express();
const server = http.createServer(app);

global.ROOT = path.normalize(__dirname, '..');

app.enable('trust proxy');
app.enable('case sensitive routing');

app.set('etag', 'strong');
app.set('view cache', false);
app.set('view engine', 'pug');
app.set('views', path.join(ROOT, 'public/views'));

app.engine('pug', pug.__express);

app.use(express.static(path.join(ROOT, 'public'), {
    maxAge: (60 * 60 * 24 * 7) * 1000
}));

app.get('/', (req, res, next) => {
  res.render('index', (err, html) => {
    if (err) {
      return res.sendStatus(404);
    } else {
      res.send(html);
    }
  });
});

const startServer = () => new Promise((resolve, reject) => {
  server.on('error', err => {
    console.error('Server Start failed:', err);
    reject(err);
  });
  server.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0', () => {
    console.log('Server Started');
    resolve();
  });
});

require('./initialisers').boot(app)
.then(() => startServer())
.then(() => console.log('App started'))
.catch((err) => {
  console.err('App start failed', err)
})
