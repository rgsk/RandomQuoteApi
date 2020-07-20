const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const quotes = require('./quotes');
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.get('/quote', (req, res, next) => {
    quotes.randomQuote((quote) => res.status(200).send([{quote: quote}]));
})
app.post('/quote', (req, res, next) => {
    const quote = req.body.quote;
    quotes.addQuote(quote);
    res.status(201).send([{quote: quote}]);
})
app.use('/', (req, res, next) => {
    res.status(404).send([{quote: ''}])
})
app.listen(8800);