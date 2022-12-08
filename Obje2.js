// PROTOTYPE KAVRAMI: Js'de hemen hemen tüm nesneler başka nesnelerden türetilerek oluşturulur.

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// console.log(person);
// console.log(person.name);
// console.log(person.fullName());
// console.log(person.job); // Tanımlı olmadığı için undefined döner.
// console.log(person.toString());

// const myObj = {};// person'u da myOBj'i de bastırsak ikisinde de proto olarak kendiliğinden tanımlanmış özellikleri console'da görürüz.
// // Bunun sebebi Js objelere kendiliğinden bir proto tanımlar ve belli metodlara sahiptirler.
// console.log(myObj);

// function Person(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.fullName = function () {
//     return this.name + " " + this.surname;
//   };
// }

//const arin = new Person("Arin", "Çekiç", 6);
//console.log(arin);

//OBJECT + name, surname, age, fullName() ---> Person ---> arin

// const elis = new Person("Elis", "Çekiç", 4);
// console.log(elis);
// elis.job = "Child";
// console.log(elis);
// console.log(elis.toString()); // Burda [object Object] döner
//Daha sonra to.stringi başka şekilde atamayı denersek...

// elis.toString = function () {
//   return "ELISSSSS";
// };
// consolee.log(elis.toString());// ELISSSSS DÖNECEKTİR ÇÜNKÜ PROTO KISMINDAKİ METODU ATAMIŞ OLDUK.

// function Person(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.fullName = function () {
//     return this.name + " " + this.surname;
//   };
// }

// // Tanımladığımız nesnelerde durmadan fullName fonksiyonu çalışması bizi yorucaktır o halde fullName fonksiyonunu prototype'a atayabiliriz.
// Person.prototype.fullName = function () {
//   return this.name + " " + this.surname;
// };

// // O halde fullName fonskiyonu artık bir prototype'a dönüşmüş oldu ve artık yazılmasına gerek de kalmadı.

//create ile bir nesneden bir nesne oluşturduğumuzda create oluşturulan nesnenin özelliklerini de prototype'a alır
//yani aslında miras alır ve değiştirmek istediklerimizi değiştirebiliriz ve böylece her nesneyi de tekrardan çalıştırmamış oluruz.

// const person = {
//   name: "XXXXXXXXX",
//   surname: "XXXXX",
//   age: 0,
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// const arin = Object.create(person);
// console.log(arin); // Burda birebir person nesnesini aslında arin olarak döndürür ve arinin prototype'ı olarak bastırır.
// console.log(arin.name);

// arin.name = "Arin";
// console.log(arin);

// console.log(arin.age);
// arin.age = 6;

// console.log(arin.age);
// console.log(arin);
// console.log(arin.hasOwnProperty("age")); // Burda true döner çünkü kendimiz bir age tanımladık ve bu objenin prototype'ından çıkmış oldu.
// console.log(arin.hasOwnProperty("surname")); // Burda ise false döner çünkü arin nesnesinin bir surName'ini tanımlamadık . Yani objenin prototype'ındadır ve bunu görmeyiz.

// console.log("surname" in arin); //burda ise true döner çünkü arinin prototype'ının içinde de olsa surname özelliği vardır.
