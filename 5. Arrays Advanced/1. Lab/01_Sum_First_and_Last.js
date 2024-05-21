function processNumbers(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

// Test cases
processNumbers(['7', '-2', '8', '9']); // Output: -2 7 8 9
processNumbers(['3', '-2', '0', '-1']); // Output: -1 -2 3 0
