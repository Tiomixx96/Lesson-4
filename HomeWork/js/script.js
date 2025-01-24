// Домашнє завдання
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// let enteredNumber = Number(prompt("enter the number"));

// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }

// checkAge(enteredNumber);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b

// const checkMin = (a, b) => {
//   return a < b ? console.log(a) : console.log(b);
// };

// checkMin(51123, 200);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// const agree = () => {
//   alert("Ви погодились.");
// };
// const disagree = () => {
//   alert("Ви скасували виконання.");
// };

// ask("Are you agree?", agree, disagree);
