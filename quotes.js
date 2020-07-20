const express = require('express');
const fs = require('fs');
const p = __dirname + "/quotes.txt";
const addQuote = (quote) => {
    fs.appendFile(p, quote+'***', () => {console.log('saved')});
}
// addQuote("Innovation distinguishes between a leader and a follower.");
const randomQuote = (cb) => {
    fs.readFile(p, (err, data)=> {
        if (err) return cb("No quotes available plz add quotes, The is a dummy quote");
        const quotes = data.toString().split('***');
        quotes.pop(); // to remove last empty quote
        cb(quotes[randomNum(quotes.length)])
    })
}

const randomNum = (limit) => {
    return Math.floor(Math.random()*limit);
}
// randomQuote((quote) => console.log(quote));
module.exports = {
    addQuote,
    randomQuote
}