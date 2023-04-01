const crypto = require('crypto');

const numIntegers = 1000000;

let outputString = '';
for (let i = 0; i < numIntegers; i++) {
  const randomInteger = crypto.randomInt(0, 1000000001);
  outputString += `${randomInteger} `;
}

process.stdout.write(outputString);
