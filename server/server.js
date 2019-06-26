const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const fs = require('fs');
const { FETCH_BITCOIN } = require('../client/CRYPTO_KEY');
const axios = require('axios');
const { formatCryptoTimes, writeToDisk } = require('./serverUtilities');

app.use(express.static(path.join(__dirname, '../public')));

//LOAD THIS WHEN YOU WANT TO RUN AND OPEN UP YOUR FILE.
/*

Dates that come from the cryptocompare API come in epoch date time zone. If you multiply the timezone by
1000 and pass that into a new Date object, the date object should return a new date. 

*/

app.get('/load', (req, res) => {
  axios
    .get(FETCH_BITCOIN)
    .then(response => formatCryptoTimes(response.data))
    .then(data => console.log(data, 'data after format'))
    .then(output => writeToDisk(output));
});

/*
TODO: Submit a request using the FETCH_BITCOIN query in the other file to cryptocompare. Take 
the response, and write it to a text file in order to play with and format D3. 

*/

app.listen(PORT, () => console.log(`Currently listening on port ${PORT}`));
