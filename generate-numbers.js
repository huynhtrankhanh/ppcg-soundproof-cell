const fs = require('fs');
const crypto = require('crypto');

const numIntegers = 1000000;

let outputString = '';
for (let i = 0; i < numIntegers; i++) {
  const randomInteger = crypto.randomInt(0, 1000000001);
  outputString += `${randomInteger} `;
}

// Write the output to a new file in the repository
fs.writeFileSync('random_numbers.txt', outputString);

// Print a success message
console.log('Random numbers have been written to random_numbers.txt');
