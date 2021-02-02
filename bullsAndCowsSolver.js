// https://www.codingame.com/ide/puzzle/bulls-and-cows-2

const numberLength = parseInt(readline());

let possib = Array.from({length: 9}, (_, i) => i + 1).map(String);

function add() {
    let res = [];
    possib.forEach(p => {
        for(let i = 0; i < 10; i++) {
            if (!p.includes(String(i)))
                res.push(p + String(i));
        }
    });
    possib = res;
}
for(let i = 1; i < numberLength; i++) {
    add();
}

function check(pos, guess, cows, bulls) {
    for (let i = 0; i < guess.length; i++) {
        let ind = pos.indexOf(guess.charAt(i));
        if (ind === i) bulls--;
        else if (ind >= 0) cows--;
    }
    return (cows === 0) && (bulls === 0);
}

readline();

console.error('possib.length', possib.length);

// game loop
let attempt = 0;
while (true) {
    const guess = possib[~~((possib.length - 1) / 2)];
    console.log(guess);

    var inputs = readline().split(' ');
    const bulls = parseInt(inputs[0]);
    const cows = parseInt(inputs[1]);
    attempt++;
    console.error({attempt, guess, bulls, cows}, possib.length);
    if (cows === numberLength) {
        possib = possib.filter(p => p.split``.every(p2 => guess.includes(p2)))
        console.error(possib);
    }
    possib = possib.filter(p => check(p,guess,cows,bulls));

    if (possib.length === 1) {
        console.log(possib[0]);
    }
}
