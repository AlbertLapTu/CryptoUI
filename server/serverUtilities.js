const fs = require('fs');

module.exports = {
  formatCryptoTimes: request => {
    let output = request;
    request.Data.forEach(entry => {
      entry.time = new Date(entry.time * 1000).toLocaleDateString();
    });

    return output;
  },
  writeToDisk: apiData => {
    fs.writeFile('cryptoCompareData.json', apiData, err => {
      if (err) {
        throw new Error('Error receiving data');
      } else {
        console.log('File Saved!');
      }
    });
  }
};
