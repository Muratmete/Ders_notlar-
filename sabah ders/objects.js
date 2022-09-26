// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const sumOfSalaries = salaries.reduce((acc, val, i) => acc - val, 100000);

// console.log("SUM:", sumOfSalaries);
//* ===================================================
//*                 (OBJECTS)
//* ===================================================
const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

console.log(arabalar.motor);

function Personel(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
}
const kisi1 = new Personel("1234567890", "Mustafa", 15000);
const kisi2 = new Personel("177567890", "Canan", 25000);

console.log(kisi1.ad);

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};

console.log(worker);
console.log(worker.job);
console.log(worker.languages[2]);

worker.email = "can@gmail.com";
console.log(worker);

//* Object Copy
const person = worker;
console.log("PERSON:", person);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//* ======================================================
//*              Object Metotlari
//* ======================================================
const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this); //? window
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};
console.log(personal.calculateAge());
// console.log(personal.summary());
// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(people);
console.log(people.person2.salary);
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

for (let key of Object.values(people)) {
  console.log(key);
}

Object.values(people).forEach((p) => console.log(p));

Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));
