'use strict';

module.exports = function(app) {
  var bananaBudget = require('../controllers/bananaBudgetController');

  app.route('/cost')
    .get(bananaBudget.compute_cost);
};
