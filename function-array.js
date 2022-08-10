// function getSum(numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 56, 65, 45, 78, 43, 91];
// getSum(myNumbers);


function oddNumberOfAnArray(numbers) {
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0) {
            // console.log(element);
            oddNumbers.push(element); // মান নতুন array তে দেয়ার জন্য

        }
    }
    return oddNumbers;
}

const myNumber = [12, 56, 65, 45, 78, 43, 91];
const oddNumbers = oddNumberOfAnArray(myNumber);
console.log(oddNumbers);