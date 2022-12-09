const { readFileSync } = require('fs');

const input = readFileSync('input.txt', 'utf-8').split('\r\n');

let max = 0;
let sum = 0;

for (const line of input) {
    if (line) {
        sum += parseInt(line);
    } else {
        if (sum > max) {
            max = sum;
        }
        sum = 0;
    }
}

console.log(max);