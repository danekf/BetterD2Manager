const ENV = require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');

//DB setup
const { Pool } = require('pg');

const dbParams = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const db = new Pool(dbParams);

db.connect()
  .then(() => console.log(`Connected to ${dbParams.database}`))
  .catch((error) => console.error(`Error connecting to ${dbParams.database}. /n ${error}`));


//App

const app = express();
const server = require('http').Server(app);

//for potential static content to serve
app.use(express.static('public'));

//setup proper cors management but can use for dev
// app.use(cors())


//Routes
const userLogin = require('./routes/userLogin');
app.use('/api/userLogin', userLogin(db));



server.listen(PORT, () => {
  console.log(`Awaiting requests on port ${PORT}.`);
});