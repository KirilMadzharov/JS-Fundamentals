function bitcoinMining(array) {
    let daysCounter = 0;
    let totalGold = 0;
    let bitcoins = 0;
    let gram = 67.51;
    let totalPrice = 0;
    let firstDay = 0;

    for (let i = 0; i < array.length; i++) {
        daysCounter++;
        if ((daysCounter % 3) === 0) {
            totalGold = array[i] * 0.7;
        } else {
            totalGold = array[i];
        }
        totalPrice += totalGold * gram;

        while (totalPrice >= 11949.16) {
            bitcoins++;
            totalPrice -= 11949.16;
            if (bitcoins === 1) {
                firstDay = daysCounter;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalPrice.toFixed(2)} lv.`);
}
