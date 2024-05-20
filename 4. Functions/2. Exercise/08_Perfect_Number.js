function isPerfectNumber(number) {
    if (number <= 1) {
        console.log("It's not so perfect.");
        return;
    }

    let sumOfDivisors = 0;

    // Find all proper divisors of the number and calculate their sum
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    // Check if the sum of divisors is equal to the number
    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

// Examples
isPerfectNumber(6);        // Output: We have a perfect number!
isPerfectNumber(28);       // Output: We have a perfect number!
isPerfectNumber(1236498);  // Output: It's not so perfect.
