// function oddNumber(numbers) {
//     let count = 0;
//     for(let i = 1; i <= numbers.length; i++) {
//         const index = i;
//         console.log(numbers, index);
//         count++
//     }
// }
// oddNumber(20);
// console.log(myNumber);

// for(i = 17; i <= 53; i++) {
//     const index = i;
//     if(i % 2 !== 0) {
//         console.log(index);
//     }
// }


// feet to inch
// function feetToInch(feets) {
//     const inch = feets * 12;
//     return inch;

// }

// const dataFeets = 12;
// const dataInches = feetToInch(dataFeets);
// console.log(dataInches);


// centimeter to meter

// function centimeterToMeter(centimeters) {
//     const meter = centimeters / 18;
//     return meter;
// }

// const dataCentimeters = 136;
// const dataMeters = centimeterToMeter(dataCentimeters);
// console.log(dataMeters);

// Paper

// function paperRequirements(page100Copies, page200Copies, page300Copies) {
//     const sumOf100Books = page100Copies * 100;
//     const sumOf200Books = page200Copies * 200;
//     const sumOf300Books = page300Copies * 300;
//     const totalPages = sumOf100Books + sumOf200Books + sumOf300Books;
//     return totalPages;
// }

// // const bookCopies = 2, 3, 4 ;
// const totalBooks = paperRequirements(2, 2, 4);
// console.log(totalBooks);


// bestFriend

// const myFriends = ['zahid', 'shohag', 'farid', 'shompod']
// function bestFriend(myFriends) {
//     const friend = Array.max(myFriends);
//     return friend;
// }

// const final = bestFriend(myFriends);
// console.log(final);

const myNumbers = [33, 45, 68, 78, 56, -7, 89, 90];
for(let i = 0; i < myNumbers.length; i++) {
    let number = myNumbers[i];
    if(number <= -1) {
        break;
    }
    console.log(number);
}
