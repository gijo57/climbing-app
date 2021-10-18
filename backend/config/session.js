const redis = require('redis');
const session = require('express-session');
const connectRedis = require('connect-redis');

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

redisClient.on('error', (err) => {
  console.log('Could not establish a connection with redis. ' + err);
});

redisClient.on('connect', () => {
  console.log('Connected to redis successfully');
});

module.exports = {
  secret: process.env.SESSION_SECRET,
  key: 'session_id',
  resave: true,
  saveUninitialized: false,
  cookie: {
    path: '/',
    secure: false,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true
  },
  store: new RedisStore({ client: redisClient })
};
