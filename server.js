const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const config = require("./config.json");
const design = require("./functions/topdesign.js")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

const router = require('./routes.js');


app.get('/', function (req, res) {
  res.send('Meddl!');
})
app.get('/posts/month',design.findAllMonth); // Get all Posts sorted by Month

// Getting API Tokens
const tokens = config.apiKeys
for (var i = 0; i < tokens.length; i++) {
    app.use('/'+tokens[i], router);
}

app.listen(port);
console.log('Magic happens on port ' + port);