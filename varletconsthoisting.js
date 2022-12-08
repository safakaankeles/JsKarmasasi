// // VAR - LET CONST

// let age = 40; //SONRADAN TANIMLANABİLİR
// console.log(age);

// age = 42;
// console.log(age);

// const name; HATA VERİR
// console.log(name);

/*let name = "Arin";
console.log(name);

name = "Elis";
console.log(name);*/

/*let str = "";

for (let i = 0; i < 10; i++) {
  str = str.concat(i);
  console.log(str);
}*/

/*let str = "";

for (const i = 0; i < 10; i++) {
  str = str.concat(i);
  console.log(str);
}*/ //Burda const kullandığımız için değiştirilemez değerde hata verir.

// const myArr = [1, 2, 3];
// console.log(myArr);
// myArr.pop();
// console.log(myArr); Const ile tanımladığımız arrayin kendisi bir referanstır ve tanımlanmış bir array vardır fakat içindeki elemanlar değişebilir.

// const student = {
//   name: "Arin",
//   age: 5,
// };
// console.log(student);

//Object.freeze(student); // Eğer ki nesnelerin proplarının değişmesini istemiyorsak freeze metodunu kullanabiliriz.

// student.name = "Elis";
// console.log(student); //Const ile nesne tanımladıktan sonra içindeki proplar değişebilir.

// student = {
//     name: "Elis",
//     age: 5,
//   }; Bu şekilde tekrardan student tanımladığımızda yine hata alacağız.

// var age;
// console.log(age);

// age = 42;
// console.log(age);

// var x = 1;
// console.log(x);
// if (x === 1) {
//   var x = 10;
//   console.log(x);
// }
// console.log(x); // Burda x yine 10 olur. Fakat biz sadece if döngüsünün içinde bir değer atamak istemiştik. Bu yüzden x sabit değildir. Uzun kodlarda hataya yol açacaktır.

// let y = 1;
// console.log(y);
// if (y === 1) {
//   let y = 10;
//   console.log(y);
// }
// console.log(y); // Burda x yine 10 olur. Fakat biz sadece if döngüsünün içinde bir değer atamak istemiştik. Bu yüzden x sabit değildir. Uzun kodlarda hataya yol açacaktır.

//HOISTING KAVRAMI

// var x;
// console.log(x);  // undefined döner ve alt satıra var x = 10; tanımlarsak yine undefined döner çünkü
// var x = 10;
// var ile tanımlanan kavramları kod döndürülmeden önce hızlıca tarar ve tanımlı olanları hafızaya atar. Değerlerini üstünden geçtikçe tekrar okur.

// console.log(y);
// let y = 20;// Burda ise direkt hata döner. Çünkü let sırayla okunmaya sebep olan atama komutudur.
//Yani let ve const hoisting özelliğine sahip değildir fakat var hoisting bir atama komutudur.
