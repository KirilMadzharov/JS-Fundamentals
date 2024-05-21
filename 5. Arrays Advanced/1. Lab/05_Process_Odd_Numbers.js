function oddNums(arr) {

    let oddPositionElements = arr.filter((n, i) => (i % 2 !== 0));
    let double = oddPositionElements.map(n => n * 2).reverse();

    console.log(double.join(" "));
}

// Example usage:

oddNums([10, 15, 20, 25]); // Output: 50 30
oddNums([3, 0, 10, 4, 7, 3]); // Output: 6 8 0

