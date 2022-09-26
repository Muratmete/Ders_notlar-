// // ? ===============================================
// // ?               FONKSİYONLAR
// // ? ===============================================

// // !------------------------------------------------
// // ! 1.YÖNTEM  : FUNCTION DECLARATION
// // !------------------------------------------------

// console.log("****** FUNC DECLARATION *********");

// //* ORNEK1:
// //************************************************/
// yazdir();
// function yazdir() {
//   console.log("merhaba");
// }

// yazdir(); //* invoke, call, çağırma

// //* ORNEK2:
// //************************************************/
// function selamla(ad, soyAd = "") {
//   console.log(`Merhaba ${ad} ${soyAd}.`);
// }

// selamla("Can", "Yilmaz");
// selamla("Canan", "Öztürk");
// selamla("ayşe");
// //! Bir parametreyi cagirma sirasında kullanmaz isek onun
// //! yerine default parametra atayabiliriz. Örnekteki LastName
// //! parametresi için default değer olarak "" atanmıştır.

// function yasHesapla(isim, dogumTarihi) {
//   //   const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi}dir`;
//   //   return sonuc;
//   return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi}dir`;
// }
// const mesaj1 = yasHesapla("Elif Can", 1990);
// console.log(mesaj1);
// console.log(yasHesapla("Veli Canan", 1980));

// //* ORNEK3:
// //************************************************/

// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} Tektir` : `${sayi} Çifttir`;
// }

// console.log(tekCift(5));
// console.log(tekCift(2));

// //* ORNEK3:
// //************************************************/

// const n = +prompt("Bir sayi giriniz:");
// console.log(tekCift(n));

const arr1 = ["a", "b", "c"];
const arr2 = ["b", "c", "a"];
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);

document.querySelectorAll("div").forEach((e) => {
  e.onclick = (e) => console.log(e.currentTarget.id);
});
const [, , daltones] = ["Joe", "Jack", "William", "Averell"];
console.log(daltones);

const instructors = {
  name: "Noah",
};
console.log(instructors);
delete instructors.name;
console.log(instructors);

const numbers = [1, 2, 3, 4, 5];
const [x, y, ...restof] = numbers;
console.log(restof);
