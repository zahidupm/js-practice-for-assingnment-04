function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0) {
        // console.log('number is even');
        return true;
    }else {
        // console.log('odd');
        return false;
    }
}

const myNumberIsEven = isEven(44);
console.log(myNumberIsEven);