//FONKSİYONLAR

//****** Function Declarion // Statement

// function square(num) {
//   // Num burda Parametre
//   return num * num;
// }
// square(5); //  5 burda argümandır.
// console.log(square(5));
// console.log(square); // fonskiyonun ne olduğunu yazdırırırz.
// console.log(square()); // () ---> Invoke yani çalıştırmak anlamında kullanılır.
//Function declaration ---> HOISTED Yani fonksiyonlar da hoisted özelliğini taşır. Üst satırında da kullansak çalıştırıcaktır.

//****** Function Expression

// const square = function (num) {
//   return num * num;
// };
// // Function ismi opsiyoneldir. Yani fonskiyon adı kullanmasak da olur.
// Yorum kısmına isim verickesek yazarak isim verebiliriz bu isim verdiğimiz kısıma genelde consttaki isim verilir

// console.log(square);// Burda direkt fonksiyonun kendisi döner.
//Çünkü argüman ya da parantez kullanmadık. Bu yüzden ne olduğunu sormuş olduk.
// console.log(suqare());// Burda NaN dönecektir. Çünkü argümana sahip değildir.
// console.log(suqare(5)); // Burda ise 25 değeri döner çünkü fonksiyonu belli bir değer altında çalıştırmış olduk.

// Genelde Function Expression daha çok kullanılan tarzdır. Çünkü fonksiyonun kendisini belli bir değişkene atarız.
//Yani bir değişkene davrandığımız gibi davranabiliriz.
// Bu yüzden Function Expressionda atadığımız fonksiyon artık FIRTS - CLASS FUNCTIONS olur.

// FIRST - CLASS FUNCTIONS
// const myArr = [
//   6,
//   "Arin",
//   function () {
//     console.log("Array Element");
//   },
// ];
// myArr[2](); // Burda gördüğümüz gibi array elemanı olarak çalıştırabiliyoruz.

// const myObj = {
//   age: 5,
//   name: "Arin",
//   func: function () {
//     console.log("Object Element");
//   },
// };
// myObj.func();

// console.log(
//   20 +
//     (function () {
//       return 10;
//     })()
// ); // IFE öğrenği
// console.log(square);
// square(5);
// const square = function (num) {
//   return num * num;
// }; // Burda const ile tanımladığımız square = function'u tanımdan önce çalıştırmayı denersek hata alırız.
// Aynısını var ile denediğimizde ise undefined dönüşünü alırız.
//Yani Function Expression hoisted değildir.
// Function expression anonymous olabilir.

//FIRST CLASS FUNCTIONS DEVAM

// const addFive = function (num, func) {
//   console.log(num + func());
// };

// addFive(10, function () {
//   return 5;
// }); Burda bir fonksiyonu başka bir fonskiyona argüman olarak alabildik.
//Bu da Function Expression'un en önemli özelliklerinden biridir.

// const myFunc = function (num) {
//   return function toDouble() {
//     console.log(num * 2);
//   };
// };
//myFunc();// Burda herhangi bir şey algılanmaz ve konsola bastırılmaz çünkü fonksiyonumuz fonskiyon içinde fonksiyondur ve 2. fonksiyon çalıştırılmaz.
//myFunc(8)();// Burda ise parantez fonksiyonu çalıştır demek olduğu için ve parametre ilk fonskiyonda bulunduğu için, console'a 16 döner.
//console.log(myFunc());// Burda fonksiyonun direkt kendisini bastırır ve ne işlevi barındırdığını belirtir.
//console.log(myFunc(5)()); // Burda ise NaN dönütünü alırız.Eğer ki 1. parametreye argüman girişi yaparsak 10 ve undefined dönüşü alırız.
// Çünkü birinci parametreyi yazdığımızda 1. fonksiyon 2. ile beraber çalışır fakat daha sonra direkt 2. fonksiyonu çalıştıramaz.

// const result= myFunc(7);
// result; // Burda da bir dönüş alamayız fakat
// result(); // Bu kısımda yine 14 döndürdüğünü görebiliriz.

// IIFE (Immediately Invocable Function Expression)

// const sum = function () {
//   console.log(5 + 12);
// };// Görüldüğü üzere direkt bir function expression mevcuttur burda. Peki IIFE'nin olayı nedir=
// sum();// Yine expressionda olduğu gibi 17 dönütünü alırız.
// console.log(sum);// Burda da sum'ın ne şekilde çalıştığını bastırırız.

//IIFE 'ye bakalım.
// (function () {
//   console.log(5 + 12);
// })();// console'a 17 döner.
// IIFE 'de fonskiyonlara isim tanımak zorunda değiliz. Fakat Js'in Function Declaration algılamasına sebep olan;
// İlk kelimenin function olmasından dolayı burda hata alırız. Bu hatadan kurtulmak için de tüm functionu () arasına alırız.
// IIFE muhabbeti fonksiyon oluşturulduğu anda çalıştırmaya yarar. Yani fonskiyonu hafızada tutarak yer kaplamaya sebep de olmaz.

//Fonksiyonlar Js de nesne olarak algılanır.
// function square(num) {
//   return num * num;
// } // tanımlayalım
// console.log(square.name); // Burda fonksiyonun adı döner. Yani square.
// console.log(square.length); // Burda ise fonksiyonun parametre sayısı döner yani 1 parametre olduğu için 1 döner.
