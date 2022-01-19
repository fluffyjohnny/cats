
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackWhenDone) {
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    callbackWhenDone(data);

  });
};


module.exports = breedDetailsFromFile;

// breedDetailsFromFile('Ragdoll', callbackMsg);

// const callbackMsg = (breed) => {
//   if (breed) {
//     console.log('returned value:', breed);
//   } else {
//     console.log('returned value:', breed);
//   }
// };
