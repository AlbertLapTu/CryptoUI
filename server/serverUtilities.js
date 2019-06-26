module.exports = {
  formatCryptoTimes: request => {
    request.Data.forEach(entry => {
      entry.time = new Date(entry.time * 1000).toLocaleDateString();
    });
  },
  writeToDisk: () => {
    console.log('Still need to do');
  }
};
