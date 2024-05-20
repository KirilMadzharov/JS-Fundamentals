function magicSum(arr, magicNumber) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === magicNumber) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    for (let pair of pairs) {
        console.log(pair.join(' '));
    }
}

// Test cases
magicSum([1, 7, 6, 2, 19, 23], 8); // Output: 1 7, 6 2
magicSum([14, 20, 60, 13, 7, 19, 8], 27); // Output: 14 13, 20 7, 19 8
magicSum([1, 2, 3, 4, 5, 6], 6); // Output: 1 5, 2 4
