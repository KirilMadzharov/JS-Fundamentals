function printAndSum(a, b) {
    let startIndex = Number(a);
    let finishIndex = Number(b);
    let sum = 0;
    let buffer = "";

    for (let i = startIndex; i <= finishIndex ; i++) {
        buffer += i + " ";
        sum += i;
    }
    console.log(buffer)
    console.log(`Sum: ${sum}`);
}