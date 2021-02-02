// https://www.codingame.com/ide/puzzle/bulls-and-cows

let possib = Array.from(Array(10e3).keys()).map(v=>('0000'+v).slice(-4));

function check(pos, guess, cows, bulls) {
    if (cows == 4) {
        if (pos.split``.some((l, i) => l == guess[i]))
            return false;
    }
    for (let i = 0; i < guess.length; i++) {
        if (guess.charAt(i) === pos.charAt(i)) {
            pos = pos.substr(0, i) + pos.substr(i + 1);
            guess = guess.substr(0, i) + guess.substr(i + 1);
            i--;
            bulls--;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        let ind = pos.indexOf(guess.charAt(i));
        if (ind >= 0) cows--;
    }
    return (cows == 0) && (bulls == 0);
}

check('8528', '8901', 0, 1);

const loneBulls = [
    '0123 1 0',
    '4567 1 0',
    '8901 1 0',
    '8522 3 0',
    '8525 3 0'
];

const oneForAll = [
    '0123 1 0',
    '4567 0 0',
    '8901 1 0',
    '1110 3 0'
];

const badGuesser = [
    '1111 0 0',
    '2222 1 0',
    '3333 0 0',
    '4444 0 0',
    '6666 0 0',
    '5555 0 0',
    '7777 2 0',
    '8888 1 0',
    '2778 0 4',
    '7287 2 2'
];

for (let i = 0; i < badGuesser.length; i++) {
    const inputs = badGuesser[i].split` `;
    const guess = inputs[0];
    const bulls = parseInt(inputs[1]);
    const cows = parseInt(inputs[2]);
    console.error({guess, bulls, cows});
    if (cows === 4) {
        possib = possib.filter(p => String(p).split``.every(p2 => guess.includes(p2)))
        console.error(possib);
    }
    for (let j = 0; j < possib.length; j++) {
        if (!check(possib[j],guess,cows,bulls)) {
            possib.splice(j, 1);
            j--;
        }
    }
    console.error(possib.length);
    console.error(possib);
}

console.error(possib.length);
for (let j = 0; j < possib.length; j++)
    console.log(possib[j]);
