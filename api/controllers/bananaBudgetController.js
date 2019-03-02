'use strict';

exports.compute_cost = function(req, res) {
 res.json({cost: totalCost(req.query.startDate, req.query.numberOfDays)});
}

// Compute the total cost of banana purchases for numberOfDays
// beginning on startDate.
function totalCost(startDate, numberOfDays) {
  const dateVals = startDate.split("/").map(str => parseInt(str));
  let date = new Date(dateVals[2], dateVals[0] - 1, dateVals[1]);
  let total = 0;
  for (let i = 0; i < numberOfDays; i++) {
    let cost = dailyCost(date);
    // console.log("Adding to total the cost of day: ", date, "\ncost: ", cost);
    total += cost;
    date.setDate(date.getDate() + 1);
  }
  return total;
}

// Return Bob's budget on a given day of the month in cents.
function dailyCost(date) {
  // Saturday and Sunday have a budget of 0 cents.
  if (date.getDay() == 0 || date.getDay() == 6) {
    return 0
  }
  // Bananas cost $0.05 * number of weeks that have passed in the month.
  return 5 * (1 + Math.floor((date.getDate() - 1) / 7));
}
