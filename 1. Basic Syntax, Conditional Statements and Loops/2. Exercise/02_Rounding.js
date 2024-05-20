function rounding(a, b) {
    let num = Number(a);
    let round = Number(b);

    if (round > 15) {
        round = 15;
    }

    let result = parseFloat(`${num.toFixed(round)}`);
    console.log(result);
}