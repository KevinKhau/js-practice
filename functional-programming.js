/**
 * For every given odd number, output the square, sorted in decreasing order.
 */

let inputs = [
    [0],
    [1, 2, 3, 4],
    [2, 3, 5, 9],
    [4, 4, 8, 2, 1, 1, 0]
]

let expectedOutputs = [
    [],
    [9, 1],
    [81, 25, 9],
    [1]
]

function tests() {
    for (let i = 0; i < inputs.length; i++) {
        let actualOutputs = compute(inputs[i]);
        console.log(`Test ${i}`);
        console.log(`\tInput: ${inputs[i]}`);
        console.log(`\tExpected: ${expectedOutputs[i]}`);
        console.log(`\tActual: ${actualOutputs}`);
        console.log(`\t${actualOutputs == expectedOutputs}`)
    }
}

// Complete method below :
function compute(input) {
}

tests();
