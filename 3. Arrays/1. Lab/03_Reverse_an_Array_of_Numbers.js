function reverseArray(n, array) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(array[i]);
    }

    let outputMessage = "";

    for (let i = arr.length - 1; i >= 0 ; i--) {
        outputMessage += arr[i] + " ";
    }
    console.log(outputMessage);
}

reverseArray(3, [10, 20, 30, 40, 50]);

