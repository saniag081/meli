const express = require('express');

const products = require('./items.route.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/items', products);
}

module.exports = routerApi;
