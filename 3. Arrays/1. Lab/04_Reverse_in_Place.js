function reverse(array) {
    let message = "";

    for (let i = array.length - 1; i >= 0 ; i--) {
        message += array[i] + " ";
    }

    console.log(message);
}

reverse(['a', 'b', 'c', 'd', 'e']);