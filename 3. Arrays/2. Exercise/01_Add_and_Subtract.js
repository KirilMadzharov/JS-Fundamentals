function addAndSubtract(array) {
    let modifiedArray = [];
    let modifiedArraySum = 0;
    let arrSum = 0;

    for (let i = 0; i < array.length; i++) {
        arrSum += array[i];
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            modifiedArray.push(array[i] + i);
            modifiedArraySum += array[i] + i;
        } else {
            modifiedArray.push(array[i] - i);
            modifiedArraySum += array[i] - i
        }
    }
    console.log(modifiedArray);
    console.log(arrSum);
    console.log(modifiedArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
