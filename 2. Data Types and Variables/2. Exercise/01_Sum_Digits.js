function sumDigits(digits) {
    if (typeof digits === "number") {
        digits = digits.toString();
    }

    let total = 0;

    for (let i = 0; i < digits.length ; i++) {
        total += Number(digits[i]);
    }
    console.log(total);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);