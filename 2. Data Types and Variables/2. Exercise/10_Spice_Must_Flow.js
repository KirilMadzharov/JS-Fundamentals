function spiceFlow(startingYield) {
    let totalSpice = 0;
    let daysOperated = 0;
    let currentYield = startingYield;

    while (currentYield >= 100) {
        daysOperated++;
        totalSpice += currentYield;
        totalSpice -= 26;
        currentYield -= 10;
    }

    totalSpice -= 26;
    if (totalSpice < 0) {
        totalSpice = 0;
    }

    console.log(daysOperated);
    console.log(totalSpice);
}

