function signCheck(first, second, third) {

    function firstAndSecondMultiply(f, s) {
        return f * s;
    }

    let firstAndSecondResult = firstAndSecondMultiply(first, second);
    let finalResult = firstAndSecondResult * third;

    if (finalResult < 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

signCheck(5,12,-15);