function repeatString(str, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += str;
    }
    console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);
