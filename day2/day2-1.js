const {readFileSync} = require('fs');

const input = readFileSync('input.txt', 'utf-8').split('\r\n');

const choices = {
    X: 1,
    Y: 2,
    Z: 3
}

const scores = {
    won: 6,
    draw: 3,
    lost: 0
}

// The first column is A for Rock, B for Paper, and C for Scissors
// The second column is X for Rock, Y for Paper, and Z for Scissors
const draws = {
    X: 'A', // Rock (X) defeats Scissors (C)
    Y: 'B', // Scissors (Z) defeats Paper (B)
    Z: 'C' // Paper (Y) defeats Rock (A)
}


// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock

const wins = {
    X: 'C', // Rock (X) defeats Scissors (C)
    Z: 'B', // Scissors (Z) defeats Paper (B)
    Y: 'A' // Paper (Y) defeats Rock (A)
}

let totalScore = 0;

for (const line of input) {
    const theirs = line.charAt(0);
    const mine = line.charAt(2);

    let roundScore = 0;
    if (draws[mine] === theirs) {
        roundScore = scores.draw;
    } else if (wins[mine] === theirs) {
        roundScore = scores.won;
    } else {
        roundScore = scores.lost;
    }
    roundScore += choices[mine];

    totalScore += roundScore;
}


console.log(totalScore);