const request = require('request');

const fetchBreedDescription = function(breadName,callback) {

  const api = 'https://api.thecatapi.com/v1/breeds/search/?q=';
  const url = api + breadName;

  request(url, (error, response, body) => {
    // URL results in an error
    if (error) {
      callback(error,null);
      return;
    }
    // breed not found
    if (body === '[]') {
      error = 'Requested breed is not found'
      callback(error,null);
      return;
    }

    const data = JSON.parse(body);
    callback(null,data[0].description);
    
  });


};
  
module.exports = { fetchBreedDescription };

// const url = 'https://api.thecatapi.com/v1/breeds/search/?q=sib';