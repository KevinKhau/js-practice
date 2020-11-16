/**
 * For every given odd number, output the square, sorted in decreasing order.
 */

let inputs = [
    [0],
    [1, 2, 3, 4],
    [2, 3, 5, 9],
    [4, 4, 8, 2, 1, 1, 0],
    [-3, -1, -2, -9, 0, 4, 3, 7, 9]
]

let expectedOutputs = [
    [],
    [9, 1],
    [81, 25, 9],
    [1],
    [81, 49, 9, 1]
]

function tests() {
    let completion = 0;
    for (let i = 0; i < inputs.length; i++) {
        let actualOutput = compute(inputs[i]);
        console.log(`Test ${i}`);
        console.log(`\tInput: ${inputs[i]}`);
        console.log(`\tExpected: ${expectedOutputs[i]}`);
        console.log(`\tActual: ${actualOutput}`);
        let success =
            expectedOutputs[i].length === actualOutput.length &&
            expectedOutputs[i].every((v, i) => v === actualOutput[i]);
        console.log(`\t${success}`)
        if (success) {
            completion++;
        }
    }
    console.log(`COMPLETION: ${completion/inputs.length*100}%`)
}

/**
 * @param input Array of integers
 * @returns Arrays with the unique squares of odd numbers, sorted in decreasing order
 */
function compute(input) {
    return input
        .filter(v => Math.abs(v%2) === 1)
        .map(v => v**2)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => b - a);
}

tests();
