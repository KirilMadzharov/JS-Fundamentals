function arrayRotations(array, n) {
    for (let rotation = 1; rotation <= n; rotation ++) {
        let firstEl = array.shift();
        array.push(firstEl);
    }
    console.log(array.join(" "));
}

arrayRotations([51, 47, 32, 61, 21], 2);
