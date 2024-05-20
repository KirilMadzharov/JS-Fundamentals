function evenOdd(arr) {
    let sum = 0;

    for (let i = arr.length - 1; i >= 0 ; i--) {
        if (parseInt(arr[i]) % 2 === 0) {
            sum += parseInt(arr[i]);
        }
    }
    console.log(sum);
}

evenOdd(['1','2','3','4','5','6']);