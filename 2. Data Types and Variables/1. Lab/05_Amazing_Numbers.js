function amazingNumbers(number) {
    let n = number.toString();
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    let result = sum.toString().includes(9);

    console.log(result ? `${n} Amazing? True`:`${n} Amazing? False`);
}

amazingNumbers(1233);
amazingNumbers(999);
