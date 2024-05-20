function printTriples(n) {
    let startChar = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let triple = String.fromCharCode(startChar + i) +
                    String.fromCharCode(startChar + j) +
                    String.fromCharCode(startChar + k);

                console.log(triple);
            }
        }
    }
}

printTriples("3");
printTriples("2");
