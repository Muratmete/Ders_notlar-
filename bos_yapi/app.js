// const selamla2 = (ad, soyad = "") => console.log(`Merhaba ${ad} ${soyad}.`);

// selamla2("hüseyin", "ikiz");
// let users = [
//   { firstName: "Susan", lastName: "Steward", age: 14 },
//   { firstName: "Daniel", lastName: "Longbottom", age: 16 },
//   { firstName: "Bruno", lastName: "Black", age: 56 },
//   { firstName: "Jacob", lastName: "Joyo", age: 15 },
//   { firstName: "Sam", lastName: "Drogo", age: 64 },
// ];

// let singleuser = users.map((user) => {
//   let fullname = user.firstName + " " + user.lastName;
//   return fullname;
// });

// console.log(singleuser);

// const youngPeople = users.filter((person) => {
//   return person.age <= 15;
// });

// console.log(youngPeople);

// let singleUser = users.find((user) => {
//   return user.firstName === "Bruno";
// });

// console.log(singleUser);

// let lion = {
//   category: "carnivore",
//   region: "south afrika",
//   "lion-baby": "cub",
// };

// console.log(lion.category);
// const Susan = {
//   firstName: "Susan",
//   lastName: "Steward",
//   age: 14,
//   hobbies: {
//     hobby1: "singing",
//     hobby2: "dancing",
//   },
// };
// const {
//   firstName,
//   lastName,
//   age,
//   hobbies: { hobby1 },
// } = Susan;

// console.log(firstName, lastName, age, hobby1);

// let pets = ["cat", "dog", "rabbits"];
// let carnivorous = ["lion", "wolf", "leopard", "tiger"];

// let animals = [...pets, ...carnivorous];
// console.log(animals);
function sayHello() {
  console.log("hello");
}
console.log(sayHello.prototype);
