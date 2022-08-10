// problem: 06
// var fruits = ['Apple', 'Banana', 'Orange'];

// // var fruit = fruits.indexOf('Banana');
// var fruit = fruits.splice(1, 1, 'Mango');
// console.log(fruit, fruits);

// problem 07

// let result = 30;

// if(result >= 80) {
//     console.log(`You got ${result} and your result is: A+`);
// }else if(result == 79 || result >= 70) {
//     console.log(`You got ${result} and your result is: A`);
// }else if(result == 69 || result >= 60) {
//     console.log(`You got ${result} and your result is: A-`);
// }else if(result == 59 || result >= 50) {
//     console.log(`You got ${result} and your result is: B`);
// }else if(result == 49 || result >= 40) {
//     console.log(`You got ${result} and your result is: D`);
// }else {
//     console.log(`You got ${result} and your result is: F`);
// }

// problem 08

// let nam1 = 13;
// let nam2 = 79;
// let nam3 = 95;

// if(nam1 > nam2 && nam1 > nam3) {
//     console.log(`Height number is ${nam1}`);
// }else if(nam1 < nam2 && nam2 > nam3) {
//     console.log(`Height number is ${nam2}`);
// }else {
//     console.log(`Height number is ${nam3}`); 
// }

// problem 09

// let nam1 = 9;
// let nam2 = 8;
// let nam3 = 9;

// if(nam1 == nam2 || nam1 == nam3) {
//     console.log(`The triangles is isolated`);
// }else if(nam1 == nam2 || nam2 == nam3) {
//     console.log(`The triangles is isolated`);
// }else {
//     console.log(`The triangles is not isolated`);
// }

// problem 11

// let signal = 'pink';

// if(signal == 'red') {
//     console.log(`The signal is ${signal} don't cross`);
// }else if(signal == 'yellow') {
//     console.log(`The signal is ${signal} stop here`);
// } else {
//     console.log(`The signal is ${signal} you can cross`);
// }


// problem 17

// const letters = 'আজকে আমার মন ভালো নেই';
// for(let i = 0; i < 39; i++) {  // video module 18.5
//     const letter = letters[i];
//     console.log(letter);
// }

// problem 19
// const number = 98;
// for(let i = 57; i < number; i++ ) {
//     console.log(i);
// }


// problem 20
// const numbers = 456;
// for(let i = 412; i <= numbers; i++) {
//     // console.log(i);
//     if( i % 2 === 0) {
//         console.log(i);
//     }
// }


// problem 22
// const allThings = ['for', 'while', 'if', 'else', 'else if'];
// for(let i = 0; i < 7; i++) {
//     const thing = allThings[i];
//     console.log(thing);
// }

// problem 23

// let mobiles = ['samsung', 'xiaomi', 'nokia', 'iphone', 'realme', 'infinix'];
// let i = 0;
// while(i < 7) {
//     let mobile = mobiles[i];
//     console.log(mobile);
//     i++;
// }

// problem 24

// for(let i = 30; i <= 86; i++) {
//     console.log(i);
//     if(i > 43) {
//         break;
//     }
// }

// problem 25

// let bookPrices = [120, 220, 310, 190, 130, 145, 210, 199, 200];
// for(let i = 0; i < bookPrices.length; i++) {
//     let bookPrice = bookPrices[i];
//     if(bookPrice > 200) {
//         continue;
//     }
//     console.log(bookPrice);
    
// }

// problem 26
// function makeAvg(num1, num2, num3) {
//     const total = num1 + num2 + num3;
//     const average = total / 3;
//     return average;
// }

// // const assignment1Marks = 60;
// // const assignment2Marks = 60;
// // const assignment3Marks = 50;

// // const myAverage = makeAvg(assignment1Marks, assignment2Marks, assignment3Marks);
// const myAverage = makeAvg(58, 57, 60);
// console.log(myAverage);

// object
// var mobile = {
//     brand: 'samsung',
//     price: 20000,
//     storage: '64gb',
//     color: 'silver'
// };

// var result = {
//     chemistry: 85,
//     atomic: 55,
//     agricultural: 66
// };

// console.log(result.chemistry);

// problem 29
// function odd_even(numbers) {
//     if(numbers % 2 === 0) {
//         console.log(`The number is odd`);
//     }else if(numbers % 2 !== 0) {
//       console.log(`The number is even`);  
//     }
//     return numbers;
// }

// const finalSubmit = odd_even(66);
// console.log(finalSubmit);

// problem 30 
// function namota(value) {
//     for(let i = 1; i <= 10; i++) {
//         // console.log(i);
//         const singleWord = i * value;
//         // const singleWords = singleWord * i;
//         console.log(singleWord);
//     }
    
// }
// const namotaTotal= namota(13);
// // console.log(namotaTotal);

// const sentences = 'Your namae is Zahid, Now write a letter about';
// function upCase(value) {
//     const sentense = sentences.toLocaleLowerCase();
//     console.log(sentense);
// }

// upCase();

// problem 33

// function fullName(first1Name, last2Name) {
//     const firstName = 'xahid';
//     const lastName = 'hasan';
//     const totalName = first1Name + last2Name;
//     return totalName;
// }

// const total = fullName();
// console.log(total);


// problem 40

// function hourToMinutes(hours) {
//     const minute = hours * 60;
//     // console.log(minute);
//     return minute;
// }

// const totalMinute = hourToMinutes(6);
// console.log(totalMinute);


// problem 41
// for(let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// problem 42
// for(let i = 50; i <= 80; i++) {
//     const odd = i % 2;
//     if(odd !== 0) [
//         console.log(i)
//     ]
// }

// problem 46

// function greatPoint(result) {
//    if(result >= 80) {
//     console.log(`You got ${result} and your result is: A+`);
//     }else if(result == 79 || result >= 70) {
//         console.log(`You got ${result} and your result is: A`);
//     }else if(result == 69 || result >= 60) {
//         console.log(`You got ${result} and your result is: A-`);
//     }else if(result == 59 || result >= 50) {
//         console.log(`You got ${result} and your result is: B`);
//     }else if(result == 49 || result >= 40) {
//         console.log(`You got ${result} and your result is: D`);
//     }else {
//         console.log(`You got ${result} and your result is: F`);
//     } 
// }

// const yourGreat = greatPoint(60);


// problem 48
// function secondMax(){ 
//     var arr = [20, 120, 111, 215, 54, 78, 123]; // use int arrays
//     var max = Math.max.apply(null, arr); // get the max of the array
//     arr.splice(arr.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, arr); // get the 2nd max
// };

// const final = secondMax();
// console.log(final);













