function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result = result * i;
        console.log(result);
    }
    return result;
}

const myInput = factorial(8);
console.log(myInput);