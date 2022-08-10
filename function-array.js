function getSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(element, sum);
    }
    return sum;
}

// const myNumbers = [12, 56, 65, 45, 78, 43, 91];
// getSum(myNumbers);


function oddNumberOfAnArray(numbers) {
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0) {
            // console.log(element);
            oddNumbers.push(element); // মান নতুন array তে দেয়ার জন্য

        }
    }
    return oddNumbers;
}

const myNumber = [12, 56, 65, 45, 78, 43, 91];
const oddNumbers = oddNumberOfAnArray(myNumber);
console.log(oddNumbers);
const oddNumberSum = getSum(oddNumbers);
console.log(`Odd number sum ${oddNumberSum}`);






// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     }
//     return sum;
// }

// function getOddNumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 === 1){
//             console.log(index, element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
// const oddNumberSum = getSumOfAnArray(oddNumbers);

// console.log('odd number sum', oddNumberSum);