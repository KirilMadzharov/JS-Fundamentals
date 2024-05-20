function charactersInRange(char1, char2) {
    // Get ASCII code of the characters
    let ascii1 = char1.charCodeAt(0);
    let ascii2 = char2.charCodeAt(0);

    // Ensure ascii1 is less than ascii2 for iteration
    if (ascii1 > ascii2) {
        let temp = ascii1;
        ascii1 = ascii2;
        ascii2 = temp;
    }

    // Iterate through the range and collect the characters
    let result = [];
    for (let i = ascii1 + 1; i < ascii2; i++) {
        result.push(String.fromCharCode(i));
    }

    // Print the result
    console.log(result.join(' '));
}

// Examples
charactersInRange('a', 'd'); // Output: b c
charactersInRange('#', ':'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
charactersInRange('C', '#'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B


// function charactersInRange(char1, char2) {
//     let [start, end] = [char1.charCodeAt(0), char2.charCodeAt(0)].sort((a, b) => a - b);
//     let result = Array.from({length: end - start - 1}, (_, i) => String.fromCharCode(start + i + 1));
//     console.log(result.join(' '));
// }
//
// // Examples
// charactersInRange('a', 'd'); // Output: b c
// charactersInRange('#', ':'); // Output

