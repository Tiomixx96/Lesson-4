// Functions

// function showMessage(name, city) {
//   console.log("Hello my name is " + name + " I'm from " + city);
// }

// showMessage("Kyiv", "Artem");

// let userName = "Ann";

// // Внутри функции могут быть переменные доступные только этой функции
// const sayHi = function () {
//   let message = "Hello my name is Vova";
//   console.log(message + userName);
// };

// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

// стрілочні функції

// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);

//   return;
//   a + b;
// };

// testFunk(5, 8);
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Порядок виконання коду

// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };
// const b = function () {
//   console.log("function b");
// };
// const c = function () {
//   console.log("function c");
// };

// a();
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// аргументи і рест
// Кожна ф-я крім стрілочних має свій псевдомасив Аргументс

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 4, 123);

// Не зная какое к-во аргументов нам прийдет мы делаем следующим образом (rest)

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName("asd", 1231241);
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
//  callback
// showOk / showCancel - функции обратного вызова, или просто колбеки.
// Суть в том, что мы передаем функцию и ожидаем, что она будет вызвана позже когда-нибудь или не будет вызвана.

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("You say ok");
// }

// function showCancel() {
//   console.log("You say no");
// }

// ask("Yes or no?", showOk, showCancel);
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Еще такие колбеки называют HOF (High order function)

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello);

// -----------------------------------------------------------------------

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("hello");
//   }

//   return console.log("Goodbye");
// }

// checkAge(19);

// Return не обязательно должен что-то возвращать

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }

//   return console.log("Go to movie!");
// }

// showMovie(22);

// -----------------------------------------------------------------------

// Стрілкові функції. Це новий синтаксіс і майже усюди будемо його використовувати

// const test = (arg) => {
//   console.log(arg);
// };

// test("Gidota");

// const showMovie = (age) => {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Hello!");
// };

// showMovie(58);
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Контексти і виклики.
// При виклику функції в середені її тіла ми можемо викликати інші функції, а ці інші можуть викликат ще функції.
// ЖС - це однопоточна мова. І функції викликаються

// const a = () => {
//   console.log("a");
// };

// const b = () => {
//   console.log("b");
// };
// const c = () => {
//   console.log("c");
//   a();
//   b();
// };

// c();
// -----------------------------------------------------------------------

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// // Стучимся в HTML в инпут с именем Number
// const numberRef = document.querySelector(`input[name="number"]`);

// // Постучится в первый баттон который словит. В нашем случае у нас 1 баттон
// const buttonRef = document.querySelector("button");

// console.log(numberRef.value);

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));
