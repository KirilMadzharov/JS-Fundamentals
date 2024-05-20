function maxNumber(array) {
    let topNum = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let rightNum = array[j];

            if (currentNum <= rightNum) {
                isTop = false;
            }
        }
        if (isTop) {
            topNum.push(currentNum);
        }
    }
    console.log(topNum.join(" "))
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);

