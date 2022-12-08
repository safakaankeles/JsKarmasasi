// JS OBJE KARMAŞASI

//Method : Bir nesne ile ilişkili function.

//Object Literal

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };
// console.log(person);

// CONSTRUCTOR ---> YAPICI

// function Person(name, surname, age) {
//   const obj = {};
//   obj.name = name;
//   obj.surname = surname;
//   obj.age = age;
//   obj.fullName = function () {
//     return obj.name + " " + obj.surname;
//   };
//   return obj;
// }

// function Person(name, surname, age) {
//   //console.log(this);// Burda parametreleri almadığı için boş dönecektir
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.fullName = function () {
//     return this.name + " " + this.surname;
//   };
//   console.log(this); // Burda ise parametreleri aldıktan sonra yazdırdığımız için tanımladığımız obje dönecektir.
// }

// const person1 = new Person("kaan", "keles", 23);
// console.log(person1);

// Object Constructor

// const person1 = new Object();
// person11.name = "John";
// person1.surname = "Doe";
// person1.age = 40;
// person1.fullName = function () {
//   console.log(this);
//   return this.name + " " + this.surname;
// };

// Object.create() ile nesne oluşturmak

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };
// console.log(person);

// const arin = Object.create(person);// Burda daha önceden oluşturulmuş objeyi kullanarak;
// yeni bir objeyi Object.create() ile oluşturduk.
// arin.name = "Arin";
// arin.surname = "Software";
// arin.age = 5;

// console.log(arin);
// console.log(arin.fullName());
