function printSpecialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }

        let isSpecial = sum === 5 || sum === 7 || sum === 11;
        let resultString = isSpecial.toString();
        resultString = resultString.charAt(0).toUpperCase() + resultString.slice(1);

        console.log(`${i} -> ${resultString}`);
    }
}

printSpecialNumbers(15);
console.log();
printSpecialNumbers(20);

printSpecialNumbers(15);
console.log()
printSpecialNumbers(20);

