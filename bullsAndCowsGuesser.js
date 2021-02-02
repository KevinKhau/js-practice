let possib = Array.from({length: 9}, (_, i) => i + 1).map(String);

function add() {
    let res = possib;
    possib.forEach(p => {
        for(let i = 0; i < 10; i++) {
            if (!p.includes(String(i)))
                res.push(p + i);
        }
    });
    possib = res;
}
for(let i = 1; i < 2; i++) {
    add();
}
console.error(possib);
