function solve(arr) {
    let result = [];

    for (let num of arr) {
        if (Number(num) < 0) {
            result.unshift(Number(num));
        } else {
            result.push(Number(num));
        }
    }

    console.log(result.join('\n'));
}

// Example usage:
solve(['7', '-2', '8', '9']);
