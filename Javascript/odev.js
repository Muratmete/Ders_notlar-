//# ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)
let sayi1 = +prompt(`Birinci sayıyı giriniz:`);
let sayi2 = +prompt(`İkinci sayıyı giriniz:`);
let islem = prompt(`Operatörü giriniz`);

if (islem === "+") {
  var sonuc = sayi1 + sayi2;
} else if (islem === "-") {
  var sonuc = sayi1 - sayi2;
} else if (islem === "*") {
  var sonuc = sayi1 * sayi2;
} else if (islem === "/") {
  var sonuc = sayi1 / sayi2;
}
console.log(sonuc);

//# ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//## Pazartesi, Salı ,Çarşamba, Perşembe -> InClass

//## Cuma -> Teamwork

//## Cumartesi ->  InClass + Workshop

//## Pazar -> Self-Study

//## Aksi takdirde -> Yanlis gun girildi.
let gun = prompt(`Günü giriniz:`).toLowerCase();

switch (gun) {
  case "pazartesi":
    console.log("Inclass");
    break;

  case "salı":
    console.log("Inclass");
    break;
  case "çarşamba":
    console.log("Inclass");
    break;
  case "perşembe":
    console.log("Inclass");
    break;
  case "cuma":
    console.log("Teawork");
    break;
  case "cumartesi":
    console.log("Inclass + Workshop");
    break;
  case "pazar":
    console.log("Self study");
    break;
  default:
    alert("Yanlış gün giriildi");
}

//# ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
// let maas = +prompt(`Maaşı giriniz`);

if (maas >= 5250) {
  console.log(`Zamlı maaşınız ${(maas * 1.1).toFixed(2)}`);
} else {
  console.log(`Zamlı maaşınız ${(maas * 1.5).toFixed(2)}`);
}

//# ODEV4: Kredi Risk Programı

//## Console’dan kişinin gelir ve gider miktarını alan

//## eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑

//## değilse Kredi Verilemez 🥺

//## şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

let gelir = +prompt("gelirinizi giriniz:");
let gider = +prompt("giderinizi giriniz:");
// let kalan = gelir-gider;

const karar =
  gelir - gider >= 5250
    ? console.log("Kredi alabilirisiniz")
    : console.log("Kredi alamazsınız!!");
