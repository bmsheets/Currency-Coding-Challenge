# Bob's Banana Budget

This repo contains my solution to the banana budget coding challenge issued by Currency Capital, LLC. It implements a single REST api endpoint that returns the total cost of banana purchases over a given period of days from a given start date. These costs vary and are described by the problem prompt (not included).

### API Endpoint:
`GET /api/cost?startDate=<MM/DD/YYYY>&numberOfDays=<N>`

`startDate` - A query string param in the format MM/DD/YYYY of when to begin calculating banana costs.

`numberOfDays` - Query string param indicating the number of days N to compute Bob's banana budget for.

### Example queries:

Bob's banana budget for the month of January, 2019:

`curl "localhost:3000/api/cost?startDate=01%2F01%2F2019&numberOfDays=31"`

A three-day budget starting on Feb 12th, 2019:

`curl "localhost:3000/api/cost?startDate=02%2F12%2F2019&numberOfDays=3"`

### Response Format:

The API response is in JSON format with a single key of cost mapping to a string representation of a USD amount.

`{ cost: '$3.25' }`
