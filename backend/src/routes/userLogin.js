const express = require('express');
const router = express.Router();


module.exports = (db) => {
  //signed in check
  router.get('/', (req, res) => {
    //detect if user logged in, and then proceed if they are
    if(req.userId) {
      // do something
    }
  });

  //login request
  router.post('/', (req, res) => {
    const { placeholderSignInDetails } = req.body;

    const queryString = `
    SELECT *
    FROM users
    WHERE details = $1
    `;

    //Sanitize inputs
    const queryValues = [`${placeholderSignInDetails}`];

    db.query(queryString, queryValues)
      .then(({rows: users}) => {
        //do stuff to log user in. Whether this is session cookies, or other.
      })
  })


  return router;
}

/*
https://luis91097.medium.com/setting-up-auth0-with-nodejs-express-f1aee8955453
https://auth0.com/docs/quickstart/webapp/express/01-login
*/