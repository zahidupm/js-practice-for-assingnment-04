function isLeapYear(year) {
    // const remainder = (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0));
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        // console.log(`Your year ${year} is leap year`);
        return true;
    }else {
        // console.log(`Your year ${year} is not leap year`);
        return false;
    }
}

// isLeapYear(1605);
const isMyYearLear = isLeapYear(1201);
console.log(isMyYearLear);