function maxSequenceOfEqualElements(arr) {
    let maxCount = 1;
    let currentCount = 1;
    let maxElement = arr[0];
    let currentElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            currentCount++;
        } else {
            currentElement = arr[i];
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxElement = currentElement;
        }
    }

    console.log(Array(maxCount).fill(maxElement).join(' '));
}

// Test cases
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // Output: 2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]); // Output: 1 1 1
maxSequenceOfEqualElements([4, 4, 4, 4]); // Output: 4 4 4 4

