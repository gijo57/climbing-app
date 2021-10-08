const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const app = require('./app');
const db = require('./config/dbconfig');

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

db();
