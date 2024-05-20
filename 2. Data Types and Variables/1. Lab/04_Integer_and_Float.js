function treeNums(numOne, numTwo, numTree) {
    let sum = numOne + numTwo + numTree;

    sum % 1 === 0 ? sum += " - Integer": sum += " - Float";
    console.log(sum);
}

treeNums(9, 100, 1.1);
treeNums(100, 200, 303);


