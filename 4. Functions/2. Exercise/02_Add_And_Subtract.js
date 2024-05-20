function addAndSubtract(n1, n2, n3) {
    let temporaryResult = sum(n1, n2);
    let result = subtract(temporaryResult, n3);

    function sum(x, y) {
        return x + y;
    }

    function subtract(a, b) {
        return a - b;
    }

    console.log(result);
}

addAndSubtract(23, 6, 10);