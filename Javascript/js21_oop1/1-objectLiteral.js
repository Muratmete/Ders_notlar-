//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
// console.log("**** Object Literals ****");
// const book1 = {
//   title: "The Karamazov Brother",
//   author: "Dostoyevski",
//   year: 1880,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1);
// console.log(book1.hasOwnProperty("author")); //?true
// //! Object nesnesinden miras  yoluyla geldi.

// const book2 = {
//   title: "The Lily of Valley",
//   author: "Honore De Balzac",
//   year: 1888,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };
// console.log(book2);
// console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)

//? Object Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
//? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'da hayat bulmus olur.
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H. Edip Adıvar", 1930);

console.log(book1);

book1.price = 100;
console.log(book1, book2);
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
console.log(book1.getSummary());

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");

console.log(mag1);
console.log(mag1.getSummary());
