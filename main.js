//ex 1

let x = +prompt('Enter your number')
if (x === 0) {
    console.log('Bad!!!');
}
else {
    console.log('Good');
}


//ex 2

let time = +prompt('Enter number from 0 to 59');

if (time >= 0 && time < 15) {
    console.log('first');
}
else if (time >= 15 && time < 30) {
    console.log('second');
}
else if (time >= 30 && time < 45) {
    console.log('third');
}
else if (time >= 45 && time < 60) {
    console.log('fourth');
}
else {
    console.log('error');
};

//ex 3

let number_of_day = +prompt('Enter number of week day(from 1 to 7)');

switch (number_of_day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wenerday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
};

//ex 4



let number1 = +prompt('Enter first number');
let number2 = +prompt('Enter second number');

if (number1 > number2) {
    console.log(number1);
}
else if (number2 > number1) {
    console.log(number2);
}
else {
    console.log('error');
};

//ex5


