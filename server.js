var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var routes = require('./api/routes/bananaBudgetRoutes');
routes(app);

app.listen(port);

console.log('Bob\'s Banana Budget RESTful API server started on: ' + port);
