function calculator(numOne, operator, numTwo) {
    const operators = {
        addition: "+",
        subtraction: "-",
        multiplication: "*",
        division: "/"
    };

    let result = 0;

    switch (operator) {
        case operators.addition:
            result = numOne + numTwo;
            break;
        case operators.subtraction:
            result = numOne - numTwo;
            break;
        case operators.multiplication:
            result = numOne * numTwo;
            break;
        case operators.division:
            result =  numOne / numTwo;
            break;
    }
    console.log(result.toFixed(2));
}

