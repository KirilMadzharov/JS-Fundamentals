// function smallestNum(n1, n2, n3) {
//     if (n1 <= n2 && n1 <= n3) {
//         console.log(n1);
//     } else if (n2 <= n1 && n2 <= n3) {
//         console.log(n2);
//     } else if (n3 <= n1 && n3 <= n2) {
//         console.log(n3);
//     }
// }
//
// smallestNum(2, 5, 3);

function smallestNum(n1, n2, n3) {
    let smallestNum = Math.min(n1, n2, n3);
    console.log(smallestNum);
}

smallestNum(2, 5, 3);