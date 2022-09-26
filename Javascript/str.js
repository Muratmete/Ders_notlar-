// let str = "Clarusway";
// console.log(str.charAt(3));
// console.log(str[5]);
// let str1 = "Hello John, welcome to Clarusway.";
// let t = str1.includes("welcome");
// console.log(`welcome = ${t}`);
// let str2 = "You do not know what you do not know until you know.";
// let result = str2.indexOf("do");
// console.log(result);
// let lastResult = str2.lastIndexOf("know");
// console.log(lastResult);
// let myString = "Mr Brown has a brown house and a brown car";
// let myNewString = myString.replace(/brown/gi, "green");
// console.log(myNewString);
// console.log(str.slice(0, 4));
// console.log(str1.substring(5, 11));
// console.log(str1.substring(6));
// let arr = str1.split("");
// console.log(arr);

// const isLeapYear = (year) => {
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log(`${ year} is a leap year.`);

//         }else{
//             console.log[`${year} is not aleap year.`];
//         }
//     }else {
//         if(year % 4 === 0) {
//             console.log(`${year} is leap year`);
//     } else

//     }
// }
// const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
// let sayi = rakamlar.length;
// let toplam = 0;
// console.log(sayi);
// for (i = 0; i < sayi; ++i) {
//   toplam = toplam + rakamlar[i];
// }

// console.log(`Dizideki sayıların toplamı ${toplam}'dır.`);

// const letters = ["a", "b", "c", "d", "e", "f", "g", "k"];

// letters.forEach((letter) => {
//   console.log(letter);
// });

// function printElements(element, index) {
//   console.log(`Item ${index}: ${element}`);
// }
// const prices = [900, 1200, 650, , 2000, 500, 1700];
// prices.forEach(printElements);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.reduce((accumulator, item) => accumulator + item));
// let kursAdi = "Komple Web geliştirme Eğitimi";
// console.log(kursAdi[8]);
// let dizi = kursAdi.slice();
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(dizi);
// sonuc = kursAdi.length;
// console.log(sonuc);
// console.log(kursAdi);
// let dust = arr.shift();
// console.log(dust);
// console.log(arr);
// basina = arr.unshift(7);
// console.log(arr);
// spli = arr.splice(1, 2, 65, 73, 85, 96);
// console.log(spli);
// console.log(arr);
// console.log(arr.indexOf(6));

// let meyve = ["Elma", "Armut", "Muz", "Çilek"];
// console.log(meyve.length);
// console.log(meyve[0]);
// console.log(meyve[meyve.length - 1]);
// console.log(arr.includes(5));
// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(5));
// arr.push(772);
// console.log(arr);
// yeni = arr.splice(arr.length - 2, 2);
// console.log(arr);

// let ogr1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
// let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
// let ogr3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];
// console.log(new Date().getFullYear() - ogr1[2]);

// var x = ["9", "25", "111", "John", "James", "Aaron"];
// console.log(x.sort());

//!1. Bölüm Loops

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.
// let a = +prompt("Pozitif bir tam sayı girin:");
// let b = +prompt("Pozitif bir tam sayı girin:");
// let c = a - 1;

// for (; 1 < c; c--) {
//   if (a % c == 0) {
//     if (b % c == 0) {
//       console.log(`OGB ${c}'dir.`);
//       break;
//     }if()
//   }
// }
// console.log("Ortak bölen yoktur.");
//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.
// let sayi = +prompt("Pozitif bir tam sayı girin:");
// bolen = sayi - 1;
// for (; 1 < bolen; bolen--) {
//   if (sayi % bolen == 0) {
//     console.log(`${bolen}, ${sayi}'yi tam olarak bölmektedir`);
//   }
// }

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.
// let yel = +prompt("Pozitif bir tam sayı girin:");
// let faktor = 1;
// let i = yel;
// for (; 1 < i; i--) {
//   faktor = faktor * i;
// }
// console.log(`${yel} sayısının faktöryeli ${faktor} dır`);

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.
// for (i = 101; 100 < i && i < 1000; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(`${i} sayısı 3 ve 5'e tam olarak bölünür`);
//   }
// }

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.
// let i = 1;
// var a = 1;
// for (; a < 10; a++) {
//   for (i; i < 10; i++) {
//     let c = i * a;
//     console.log(`${i} X ${a} = ${c}`);
//   }
//   continue;
// }

//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game.
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

//!2. Bölüm Functions

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

//! Q-5
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);

// console.log("Tekrar");

let dizi = [10, 20, 30, 50, 100];

// for (let i in dizi) {
//   console.log(dizi[i]);
//   console.log(i);
// }
// dizi.forEach((item, index) => {
//   console.log(item);
//   console.log(index);
// });

// dizi = dizi.map((x) => (x *= 2));
// console.log(dizi);

// let son = dizi.filter((x) => x > 50);
// console.log(son);
// let cumle = "Ali eve gitti.";
// cumle.toUpperCase().indexOf("A");
// console.log(cumle);

// let dizi2 = [1000, 2000, 3000, 5000, 10000];

// let zamliMaas = dizi2.filter((x) => x > 4000).map((y) => (y *= 1.3));
// console.log(zamliMaas);
const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/name/turkey");

request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(typeof data);
  console.log(data[0]);
});
