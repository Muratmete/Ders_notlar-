// console.log("merhaba");

//  let sum = 0;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   sum += i;
// }
// console.log(`The total is ${sum}`);

// let count = 1;
// while (count < 10) {
//   console.log(count);
//   count += 2;
// }
// var i = 0;
// var mult = 5;
// while (i < 3) {
//   var mult = mult * i;
//   i++;
// }
// console.log(`The answer is: ${mult}`);

// let count = 0;
// do {
//   console.log(count);
//   count++;
// } while (count < 5);
// let sum = 0;
// let number = 0;
// do {
//   sum += number;
//   number = parseInt(prompt(`Enter a number:`));
// } while (number >= 0);
// console.log(`The sum is ${sum}.`);
// let i = 0;
// while (i < 10) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
//   i += 1;
// }
// console.log(`i = ${i} after while loop`);
// for (let i = 4; i < 8; i++) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(i);
// }
// const number = parseInt(prompt(`Enter a number:`));
// if (number > 0) {
//   console.log(`The number is positive`);
// }
// console.log(`If clause is easy`);
// const number = parseInt(prompt(`Enter a number:`));
// if (number > 0) {
//   console.log(`The number is positive`);
// } else {
//   console.log(`The number is either a negative number or 0`);
// }
// console.log(`If clause is easy`);
// if (condition1) {
//   // code block 1
// } else if (condition2){
//   // code block 2
// } else if (condition3){ // we can add as much as we need to
//   // code block 3
// } else if (condition4){ // we can add as much as we need to
//   // code block 4
// } else {
//   // code block 3
// }

// const number = parseInt(prompt(`Enter a number:`));
// if (number > 0) {
//   console.log(`The number is positive`);
// } else {
//   if (number === 0) {
//     console.log(`The number is 0`);
//   } else {
//     console.log(`The number is a negative number `);
//   }
// }
// console.log(`if..else if ..else statement very easy`);
// let grade = parseInt(prompt(`Enter a number:`));
// let result = grade >= 50 ? `Passed` : `failed`;
// console.log(`You ${result} the exam`);

// let yas = prompt(`Enter your age:`);
// let result = yas >= 18 ? `You are laegal` : `You are not legal`;
// console.log(result);

// const first = 2;
// const second = 0;
// const third = 30;
// let result = first && second && third;
// console.log(result);

// const userLoggedIn = true;
// userLoggedIn && console.log("Welcome");
let a = 3;
switch (a) {
  case "3":
    a = 33;
    break;
  case 2:
    a = "two";
    break;
  case 3:
    a = "three";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
