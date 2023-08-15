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

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = weightMark / heightMark ** 2;
// const BMIJohn = weightJohn / (heightJohn * 2);
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn)
// {
//     console.log(`Mark's BMI is (${BMIMark}) higher than john's (${BMIJohn})!`);
// }else{
//     console.log(`John's BMI (${BMIJohn}) is higher than mark's (${BMIMark})!`);
// }

// type conversion
// const inputYear = '1997';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 10);

// type coercion

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// const age = '18';
// if(age === 18 ) console.log('You just became an adult (strict)');
// if(age == 18 ) console.log('You just became an adult (loose)');

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite !== 23) console.log("Why not 23 ?");

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the tropyh 🏆');

// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Dolphins win the tropyh 🏆');
// }else if (scoreDolphins === scoreKoalas)
// {
//     console.log('Both the wins 🏆');
// }


// const day = 'tuesday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Preapere theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
//         break;
// }

// const age = 23;

// const drink = age >= 18 ? 'wine 🍷' : ' water 🍼';

// console.log(drink);

// let drink2;
// if(age >= 18)
// {
//     drink2 = 'wine 🍷' 
// }else{
//     drink2 = ' water 🍼';
// }

// console.log(drink2);