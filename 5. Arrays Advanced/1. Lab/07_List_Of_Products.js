function listProducts(products) {
    // Sort the products in ascending order by name
    let sorted = products.sort();

    // Loop through the sorted array and print each product with its number
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

// Example usage:

listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
