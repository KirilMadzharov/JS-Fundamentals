function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let sum = sequence.slice(start, end).reduce((a, b) => a + b, 0);
        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}

// Test cases

lastKNumbersSequence(6, 3); // Output: 1 1 2 4 7 13
lastKNumbersSequence(8, 2); // Output: 1 1 2 3 5 8 13 21


