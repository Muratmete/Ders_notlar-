// console.log("HELLO", "world", "merhaba");
// let myName = "adil";
// console.log("meraha " + myName + " hoşgeldin");
// console.log(`merhaba ${myName} hoşgeldin`);
// let surName = "yıldız";
// console.log(`My name is ${myName} ${surName}. `);
// console.log(myName.length);

// let km = 45;
// // let mil = km * 1.609;
// console.log(`${km} km ${(km * 1.609).toFixed()} mile eşittir.`);

// let num1 = Number(prompt("sayı giriniz", 7));
// let num2 =787878 parseInt(prompt("Bir sayı giriniz:", 8));
// let num3 = +prompt("Bir sayı giriniz:", 9);

// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);

// console.log(`${num1} * ${num2} = ${num1 * num2}`);

// let sayi3 = parseInt(prompt("sayı giriniz"));

// if (sayi3 % 3 === 0) {
//   console.log(`${sayi3} 3'e tam bölünür`);
// } else {
//   console.log(`${sayi3} 3'e tam bölünemez.`);

// }

// let sayi4 = parseInt(prompt("sayı giriniz"));

// if (sayi4 > 0) {
//   console.log("sayi pozitiftir.");
// } else if (sayi4 < 0) {
//   console.log("sayinegatifr");
// } else {
//   console.log("sayi sıfır.");
// }

// let skor = 65;
// if (skor > 94) {
//   console.log("A");
// } else if (skor > 89) {
//   console.log("B");
// } else if (skor > 84) {
//   console.log("B+");
// } else if (skor > 79) {
//   console.log("B");
// }
// console.log("F");

// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

// const sayi = prompt(`Bir sayı giriniz:`);
// if (sayi > 0) {
//   console.log(`${sayi} pozitif bir sayıdır.`);
// } else if (sayi == 0) {
//   console.log(`${sayi} 0'a eşittir.`);
// } else {
//   console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

// console dan 3 tam sayı alarak bunların en büyüğünü
// yazdırınız?
// const n1 = +prompt(`sayi1:`);
// const n2 = +prompt(`sayi2:`);
// const n3 = +prompt(`sayi3:`);

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en büyük sayıdır.`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en büyük sayıdır.`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en büyük sayıdır.`);
// }

//* 2.yöntem

// let enBuyuk = n1;
// if (n2 >= enBuyuk) {
//   enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//   enBuyuk = n3;
// }
// console.log(`En büyük sayı ${enBuyuk}.`);

//*******************TERNARY************ */
//? örnek: kaldı geçti
// const not = +prompt(`Notunuzu giriniz`);
// let sonuc = not >= 50 ? "Geçti" : "Kaldı";
// console.log(sonuc);

const yas = 17;
const cinsiyet = "erkek";
const saglikli = true;
yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("askerlik yapmalı")
  : console.log("askerlik yapmasına gerek yok");
