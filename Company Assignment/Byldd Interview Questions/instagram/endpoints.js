const express = require('express');
const bodyParser = require('body-parser');
const models = require('models');

const app = express();
app.use(bodyParser.json());

/**
 * Define Register endpoint below
 */


/**
 * AUTH MIDDLEWARE THAT SETS `req.user`
 */
app.use(function(req, res, next) {
  req.user = { } // assume this
});


/**
 * Define Post Endpoints below
*/

app.listen(3000);
