function findEqualSumsIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // Calculate left sum
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        // Calculate right sum
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        // Check if left sum equals right sum
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }

    console.log("no");
}

// Test cases
findEqualSumsIndex([1, 2, 3, 3]); // Output: 2
findEqualSumsIndex([1, 2]); // Output: no
findEqualSumsIndex([1]); // Output: 0
findEqualSumsIndex([1, 2, 3]); // Output: no
findEqualSumsIndex([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); // Output: 3
