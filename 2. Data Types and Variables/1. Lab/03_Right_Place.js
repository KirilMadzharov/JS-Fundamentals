function rightPlace(str, char, res) {
    let result = str.replace("_", char);
    let output = res === result? "Matched" : "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')
