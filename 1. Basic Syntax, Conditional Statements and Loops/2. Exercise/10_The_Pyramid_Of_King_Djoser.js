function pyramid(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let rowCount = 0;
    let currentSize = base;

    while (currentSize > 2) {
        rowCount++;
        let outerLayer = (currentSize * 4 - 4) * increment;
        let innerLayer = ((currentSize - 2) * (currentSize - 2)) * increment;

        totalStone += innerLayer;

        if (rowCount % 5 === 0) {
            totalLapisLazuli += outerLayer;
        } else {
            totalMarble += outerLayer;
        }
        currentSize -= 2;
    }
    rowCount++;
    let totalGold = (currentSize * currentSize) * increment;
    let finalHeight = rowCount * increment;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}