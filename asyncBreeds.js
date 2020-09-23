// asyncBreeds.js
const fs = require('fs');
let dataFlyTrap = '';
const breedDetailsFromFile = function(breed, dataCatch) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) dataCatch(data);
    else dataCatch(undefined);
  });
};
const dataCatch = (data) => {
  console.log(data);
}


// breedDetailsFromFile('Bombay', dataCatch);

module.exports = breedDetailsFromFile;