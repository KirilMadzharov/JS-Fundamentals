function loadingBar(percentage) {
    // Determine the number of percentage blocks
    const numBlocks = percentage / 10;
    // Create the loading bar representation
    let loadingBar = '[';
    for (let i = 0; i < 10; i++) {
        if (i < numBlocks) {
            loadingBar += '%';
        } else {
            loadingBar += '.';
        }
    }
    loadingBar += ']';

    // Print the loading bar and status message
    if (percentage === 100) {
        console.log(`${percentage}% Complete!`);
        console.log(loadingBar);
    } else {
        console.log(`${percentage}% ${loadingBar}`);
        console.log('Still loading...');
    }
}

// Examples
loadingBar(30);
// Output:
// 30% [%%%.......]
// Still loading...

loadingBar(50);
// Output:
// 50% [%%%%%.....]
// Still loading...

loadingBar(100);
// Output:
// 100% Complete!
// [%%%%%%%%%%]
