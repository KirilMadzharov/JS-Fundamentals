function firstAndLastKNumbers(arr) {
    let k = arr[0];
    let numbers = arr.slice(1);

    let firstK = numbers.slice(0, k);
    let lastK = numbers.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

// Test cases

firstAndLastKNumbers([2, 7, 8, 9]); // Output: 7 8 \n 8 9
firstAndLastKNumbers([3, 6, 7, 8, 9]); // Output: 6 7 8 \n 7 8 9
