require('dotenv').config();

var express = require('express');
var cors = require('cors');
const axios = require('axios');
var app = express();

app.use(cors());

app.get('/users', function(req, res) {
  axios
    .get('https://slack.com/api/users.list', {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_API_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(({ data }) => res.json(data))
    .catch(error => res.status(500).json(error));
});

app.listen(process.env.PORT || 3000);
