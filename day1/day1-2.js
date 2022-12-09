const {readFileSync} = require('fs');

const input = readFileSync('input.txt', 'utf-8').split('\r\n');

let max = [0, 0, 0];
let sum = 0;

for (const line of input) {
    if (line) {
        sum += parseInt(line);
    } else {
        if (sum > max[2]) {
            if (sum > max[0]) {
                max[2] = max[1];
                max[1] = max[0];
                max[0] = sum;
            } else if (sum > max[1]) {
                max[2] = max[1];
                max[1] = sum;
            } else if (sum > max[2]) {
                max[2] = sum;
            }
        }
        sum = 0;
    }
}

console.log(max[0] + max[1] + max[2]);