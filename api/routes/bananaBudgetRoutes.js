'use strict';

module.exports = function(app) {
  var bananaBudget = require('../controllers/bananaBudgetController');

  app.route('/api/cost')
    .get(bananaBudget.getCost);
};
