const ENV = require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const bodyParser = require('body-parser');
const { auth } = require('express-openid-connect');
const cors = require('cors');

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
//setup proper cors management but can use for dev
app.use(cors())

//for potential static content to serve
// app.use(express.static('public'));

//request logging
app.use((req, res, next) => {
  console.log(`incoming request...${req.path}, ${req.method}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());

//Auth0
// const auth0Config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.REDIRECT_URL,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH_URL,
// }
// app.use(auth(auth0Config));

//Routes
const userLogin = require('./routes/userLogin');
app.use('/api/userLogin', userLogin(db));

const inventory = require('./routes/inventory');
app.use('/api/inventory', inventory(db));


server.listen(PORT, () => {
  console.log(`Awaiting requests on port ${PORT}.`);
});