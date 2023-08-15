// Variable

// let angka = 50 + 30 - 20 / 2
// console.log(angka)

// console.log('andrew');
// console.log(40);

// let firstName = "Andrew ";
// let lastName = "Wiliam";

// console.log(firstName + lastName);

// Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 24);
// console.log(typeof 'Andrew');

// const ageAndrew  = 2023 - 1997;
// const ageAra     = 2023 - 2003;
// console.log(ageAndrew, ageAra);

// let x = 10 + 5;
// x +=10;
// x *=5;
// console.log(x);

// console.log(ageAndrew > ageAra);
// console.log(ageAndrew <= ageAra);

// let x,y;
// x = y = 25 -10 -5;
// console.log(x,y);

// const averageAge = ageAndrew + ageAra / 2;
// console.log(ageAndrew, ageAra, averageAge);

// Challange Fundamental 1

// const massMark   = 78;
// const heightMark = 1.69;
// const massJohn   = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn)

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = weightMark / heightMark ** 2;
// const BMIJohn = weightJohn / (heightJohn * 2);
// console.log(BMIMark, BMIJohn);

// const completeName  = "Andrew Wiliam";
// const birthdayYear  = 1997;
// const job           = "Programmer";
// const year          = 2023;

// console.log("Hello Friends, I'm " + completeName + ' a ' + (year - birthdayYear) + " Years Old " + job + ' ! ');

// const completeNameNew = `I'm  ${completeName} a ${year - birthdayYear} Years Old ${job} ! `;
// console.log(completeNameNew);

// console.log("String With \n\
// Multiplane \n\
// Lines");

// console.log(`Lines 1 
// Lines 2 
// Lines 3`);

// const age = 10;

// if(age >= 16)
// {
//     console.log("Andrew Can Starts Driving License");
// }else{
//     const yearsOld = 16 - age;
//     console.log(`Andrew is too young ,wait another ${yearsOld} years old :D`)
// }

// const birthdayYear = 1998;

// let century;

// if(birthdayYear <= 2000)
// {
//     century = 20
// }else{
//     century = 21
// }
// console.log(century);

// Challange Fundamental 2

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * 2);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn)
{
    console.log(`Mark's BMI is (${BMIMark}) higher than john's (${BMIJohn})!`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than mark's (${BMIMark})!`);
}