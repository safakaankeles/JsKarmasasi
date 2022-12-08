// New OBJECT SYNTAX

//1- Shorthand Properties
// let name = "arin",
//   age = 5;

// const myOBJ = {
//   name: name,
//   age: age,
// };
// console.log(myObj.name);// Burdan arin
// console.log(myObj.age);// Burdan ise 5 değeri döner. Çünkü name ve age yukarıda bu şekilde tanımlandı.
// //Bunu daha kolay yola çevirelim.

// let name = "arin",
//   age = 5;

// const myObj = {
//   name,
//   age,
// };//Bu şekilde yazdığımızda da yine aynı şekilde console.log döner.

// console.log(myObj.name);
// console.log(myObj.age);

//2- Computed Prperty Names

// let prop1 = "name";
// let myObj = {};

// myObj[prop1] = "arin";
// console.log(myObj); // {name: "arin"} döner.

// let prop1 = "name";
// let myObj = {
//   [prop1]: "arin",
// };
// console.log(myObj); // Yine aynı şekilde {name: "arin"} döner.

//3- Short Method Syntax

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
//}; // Burda normalde person'u bu şekilde tanımlıyorduk.

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName() {
//     return this.name + " " + this.surname;
//   }
//}; // Artık bu şekilde ": function"  kısmını silerek de tanımlayabiliriz.

//4- Object Destructuring

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName() {
//     return this.name + " " + this.surname;
//   },
// };
// let myVar1 = person.name;
// console.log(myVar1);
// let myVar2 = person.age;
// console.log(myVar2);// Normalde tıpkı burda olduğu gibi bir değişkene atamak istediğimizde propları bu şekilde atayabiliypruz.
//Fakat bu şekilde olduğunda fazla prop olduğunda işler çok karmaşıklaşır.

// let { name: myVar1, age: myvar2 } = person;// Bu şekilde yazdığımızda tek satırda hepsini yazabilmiş olduk.
// console.log(myVar1);
// console.log(myVar2);
// //Peki myVar1 yerine name ve myVar2 yerine de age değişkenleri atamış olsaydık ?

// let { name: name, age: age } = person;
// console.log(name);
// console.log(age);//Yine aynı sonucu alabilmiş olurduk peki burdan sonra name:name ve age:age diyerek birbirini tekrarlayan ifadelerin yerine;

// let { name, age } = person;
// console.log(name);
// console.log(age);// Birbirini tekrar etmeden yazılmış console.log'lar aslında en baştaki örnekle yani myVar ile aynı şekilde dönecektir.

// const books = [
//   {
//     title: "Kırmızı Pazartesi",
//     author: "Haruki Murakami",
//     pageNum: 296,
//   },
//   {
//     title: "Şeker Portakalı",
//     author: "Jose Muro de Vascanselos",
//     pageNum: 200,
//   },
//   { title: "En Uzun Yüzyıl", author: "İlber Ortaylı", pageNum: 402 },
// ];

// for (const { title, author } of books) {
//   console.log(title + ": " + author);
// }// Bu şekilde bir for döngüsü yazdığımızda yukarıdaki books'un içinde bulunan tüm objelerin title ve authorlarını bastırıcaktır.

//5- Spread Opertaron in Object Literals (...)

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName() {
//     return this.name + " " + this.surname;
//   },
// };
// const person2 = { ...person };
// console.log(person2);//Bu şekilde yazdığımızda yine personun özelliklerini person2 de görmüş oluruz.

// myObj1 = {
//   name: "arin",
//   age: 6,
// };
// myObj2 = {
//   job: "student",
//   gender: "female",
// };
// const arin = { ...myObj1, ...myObj2 };
// console.log(arin); // Bu şekilde yazdığımızda burda  arin myObj1 ve myObj2 'nin birleşimi olarak döner.
// //Ayrıca bir parametre ya da argüman atanmış bir parametre eklemek istediğimizde de direkt üstüne ekleyebiliriz.
// //Aşağıda tekrardan baktığımızda school propu eklenmiştir.
// myObj1 = {
//   name: "arin",
//   age: 6,
// };
// myObj2 = {
//   job: "student",
//   gender: "female",
// };
// const arin = { ...myObj1, school: "Zehra Baysal", ...myObj2 };
// console.log(arin);

//6- REST Operator in Object Literals

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName() {
//     return this.name + " " + this.surname;
//   },
// };
// //const { name, surname, age } = person;//Bu şekilde tanımlayabildiğimiz person nesnesini artık şöyle tanımlayabileceğiz;
// //console.log(name);

// const { name, ...rest } = person;
// console.log(name);
// console.log(rest);

//7- Object Values - Object Entries
// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName() {
//     return this.name + " " + this.surname;
//   },
// };
// console.log(Object.keys(person));//Personun keyslerini yani ["name","surname","age","fullName"] bastırır.
// console.log(Object.values(person));// Personun valueslerini array içinde bastırır.
// console.log(object.entries(person));// Personun [keys,values] değerlerini bir arrayler içinde bastırır.

//Object konusu buraya kadardı.
