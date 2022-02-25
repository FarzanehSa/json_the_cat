const request = require('request');


const breedFetcher = function(url) {
  
  request(url, (error, response, body) => {
    
    // URL results in an error
    if (error) {
      console.log(error);
      return;
    }
    // breed not found
    if (body === '[]') {
      console.log("\nSadly the requested breed is not found.\n");
      return;
    }

    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++)
    console.log(`\n ${data[i].description}\n`)

  }); 
};

// ------------------------------------------

// const url = 'https://api.thecatapi.com/v1/breeds/search/?q=sib'

const input = process.argv.slice(2);
if (input.length !== 1) {
  console.log("\nWe are going to print cat's reed description");
  console.log('After app name, insert bread name \n');
  return;
}

const breed = input[0];   
const url = 'https://api.thecatapi.com/v1/breeds/search/?q='+breed
breedFetcher(url);




