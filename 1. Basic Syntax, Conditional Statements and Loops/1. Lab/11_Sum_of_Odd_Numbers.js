function sumOfOdd(input) {
    let n = Number(input);
    let counter = 0;
    let sum = 0;

    while (true) {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                console.log(i);
                counter++;
                sum += i;
                if (counter >= n) break;
            }
        }
        if (counter >= n) break;
    }

    console.log(`Sum: ${sum}`);
}