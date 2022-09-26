//----------------------------------OUESTION 1--------------------------------------------

// !Write a simple JavaScript program to join all elements of the following array into a string.
// !Sample array : ;
// const arrToString = (arr) => {
//   return arr.join(",");
// };
// console.log(arrToString(["Red", "Green", "White", "Black"]));
// Expected Output :
// "Red, Green, White, Black"

//----------------------------------OUESTION 2--------------------------------------------

// Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.
// For example, if you accept 025468 the output should be 0-254-6-8.
// let sayi = prompt(`Bir sayi giriniz.`);
// sayi = sayi.split("");
// const insertDash = (sayi) => {
//   console.log(sayi);
//   let result = "";
//   for (let i = 0; i < sayi.length; i++) {
//     if (sayi[i] % 2 == 0 && sayi[i + 1] % 2 == 0) {
//       result += sayi[i] + "-";
//     } else {
//       result += sayi[i];
//     }
//   }
// };
// console.log(insertDash(sayi));

//----------------------------------OUESTION 3--------------------------------------------

// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

//----------------------------------OUESTION 4--------------------------------------------

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// const mostFrequent=()=>{
//     for(let i =0; )
// }

//----------------------------------OUESTION 5--------------------------------------------

// Write a JavaScript program that accepts a string as input and swap the case of each character.
// For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function yazdir(ad, dogum) {
//   const yas = 2021 - dogum;
//   console.log(` ${ad} ve ben ${yas} yaşındayım`);
// }
// yazdir("ahmet", 1980);

// const tekMi = function (x) {
//   return x % 2 ? "tek" : "çift";
// };
// console.log(tekMi(+prompt("Bİr sayı girin")));

// let a = 0;
// let i = 0;
// const toplam = (n) => {
//   for (i; i <= n; i++) {
//     a = a + i;
//   }
// };
// toplam(+prompt("bir sayı giriniz:"));
// console.log(a);

// let dizi = [];
// let i = 0;
// for (; i <= 100; i++) {
//   dizi.push(i);
// }
// console.log(dizi);
// let dizi1 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24,
//   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
//   44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
//   63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82,
//   83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 99, 100,
// ];
// let i = 1;

// for (; i <= 100; i++) {
//   if (!dizi1.includes(i)) {
//     console.log(`${i} sayısı dizide yoktur.`);
//   }
// }

// let mesaj = prompt("bir mesaj girin");
// let tekrar = +prompt("Bir sayı girin");
// for (let i = 0; i < tekrar; i++) {
//   console.log(mesaj);
// }

//*JSON dizi içerisindeki objeler, İtere edebilmek için döngülere daha kolay alabilmek için
// const team = [
//   { name: "Josh", surname: "Adams", job: "developer", age: 30 },
//   { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//   { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
// ];

// console.log(team);
// console.log(team[2]);

// team.forEach((person) => console.log(person.job));
// team.forEach((per) => console.log(per.name, per.age));
// team.forEach((pe) => console.log(pe.surname));

// const ages = team.map((p) => p.age + 1);
// console.log(ages);

// const isim = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }));
// console.log(isim);
// let daltones = ["joe", "Jack", "Willam", "Averell"];
// for (let i = 0; i < daltones.length; i++) {
//   if (i == 1) {
//     continue;
//   }
//   console.log(daltones[i]);
// }

// let avengers = ["Iron Man", "Captain America", "Black Widow", "Hulk"];
// avengers.splice(2, 1, "Thor", "Hawkeye");
// console.log(avengers);

// let fullStack = {
//   languages: ["JavaScript", "React", "HTML"],
//   jira: true,
//   gitHub: true,
//   difficulty: 8,
// };

// console.log(fullStack.languages);
// fullStack["languages"].forEach((l) => console.log(l));

// for (let key of Object.keys(fullStack)) {
//   console.log(key);
// }
// const myCar = {
//   make: "ford",
//   model: "Mustang",
//   year: 1965,
//   color: "Black",
// };

// myCar.age = new Date().getFullYear() - myCar.year;
// console.log(myCar.age);
// //myCar.age(2022);
// const carAge = function (number) {
//   return number - myCar.year;
// };
// console.log(carAge(2022));

function convertRoma() {
  let number = +prompt("sayi giriniz");
  let firstNumber = number;
  let convertData = "";
  if (number > 3000 || number == "") {
    console.log("sayi 3000'den kucuk , 0 dan büyük olmalı");
    return;
  }
  while (number > 999) {
    number = number - 1000;
    convertData = convertData + "M";
  }
  if (number >= 900) {
    number = number - 900;
    convertData = convertData + "CM";
  }
  if (number >= 500) {
    number = number - 500;
    convertData = convertData + "D";
  }
  if (number >= 400) {
    number = number - 400;
    convertData = convertData + "CD";
  }
  while (number > 99) {
    number = number - 100;
    convertData = convertData + "C";
  }
  if (number >= 90) {
    number = number - 90;
    convertData = convertData + "XC";
  }
  if (number >= 50) {
    number = number - 50;
    convertData = convertData + "L";
  }

  if (number >= 40) {
    number = number - 40;
    convertData = convertData + "XL";
  }
  while (number > 9) {
    number = number - 10;
    convertData = convertData + "X";
  }
  if (number == 9) {
    number = number - 9;
    convertData = convertData + "IX";
  }
  if (number >= 5) {
    number = number - 5;
    convertData = convertData + "V";
  }
  if (number == 4) {
    number = number - 4;
    convertData = convertData + "IV";
  }
  while (number > 0) {
    number = number - 1;
    convertData = convertData + "I";
  }
  console.log(
    `Girilen sayı: ${firstNumber} , Roma rakamı karşılığı: ${convertData}`
  );
}

convertRoma();
