function smallestTwoNumbers(arr) {
    // Sort the array in ascending order
    let sortedInAscending = arr.sort((a, b) => a - b);

    // Take the first two elements
    let smallestTwo = sortedInAscending.slice(0, 2);

    // Print the two smallest elements separated by space
    console.log(smallestTwo.join(" "));
}

// Example usage:

smallestTwoNumbers([30, 15, 50, 5]); // Output: 5 15
smallestTwoNumbers([3, 0, 10, 4, 7, 3]); // Output: 0 3
