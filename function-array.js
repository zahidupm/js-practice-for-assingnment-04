function getSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(element, sum);
    }
    return sum;
}

const myNumbers = [12, 56, 65, 45, 78, 43, 91];
getSum(myNumbers);