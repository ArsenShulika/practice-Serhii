/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = ["Dennis", "Dennis", "Shaw", "Watkins", "Watkins", "Ray"];
// const filteredEmployees = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }
// console.log(filteredEmployees);

// const employees = ["Dennis", "Dennis", "Shaw", "Watkins", "Watkins", "Ray"];
// const filteredEmployees = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// filteredEmployees.splice(filteredEmployees.indexOf("Shaw"), 1);
// filteredEmployees.splice(0, 1, "Thorton");

// console.log(filteredEmployees);

//?Потрібно перевітири чи є речення паліндром

// const str = "Я несу гусеня";
// const str = "І була пані на палубІ";
// const str = "Поліна неси Ром!";

// const newStr = str.toLowerCase().replaceAll(" ", "");

// const updateStr = [...newStr].reverse().join("");

// console.log(newStr == updateStr);

// янесугусеня
// const str = 'Де помити мопед';
// const str = 'І була пані на палубІ';
// const str = 'Поліна неси Ром!';

// const updateStr = str.replaceAll(" ", "").toLowerCase();
// const updateStr2 = [...updateStr].reverse().join("");

// console.log(updateStr === updateStr2);

// const genres = ["Jazz", "Blues", "rock'n'roll", "Country", "Reggy"];

// let longestWord = genres[0];

// for (let i = 0; i < genres.length; i += 1) {
//   //   console.log(genres[i]);
//   if (longestWord.length < genres[i].length) {
//     longestWord = genres[i];
//   }
// }
// console.log(longestWord);

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
? Добав перевірку, що параметри це числа
*/

// function addNumbers(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   return "someone not number";
// }

// console.log(addNumbers("t", 3));

// function min(a, b) {
//   return typeof a === "number" && typeof b === "number" ? Math.min(a, b) : "not number";
// }

// console.log(min(5, 3, 9));

//? Чи рядок є поліндромом?

// const str = "JavaScript це цікаво!";
// let newStr = "";

//! first method:

// for (let i = str.length - 1; i >= 0; i -= 1) {
//   newStr += str[i];
// }

// console.log(newStr);

//! second method:

// newStr = str.split("").reverse().join("");
// console.log(newStr);

//! third method:

// for (let i = 0; i < str.length; i += 1) {
//   newStr += str[str.length - 1 - i];
// }

// console.log(newStr);

// !!!!!

// const arr = [];

// for (let i = 0; i < str.length; i += 1) {
//   arr.unshift(str[i]);
// }

// console.log(arr.join(""));

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }
// console.log(total);

// ?ПОРАХУЙ СУМУ ВСІХ ЗАРПЛАТ

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 40000, 15000];

// !fitst method:

// const newArr = [...managerSalaries, ...developersSalaries];

// let total = 0;

// for (let i = 0; i < newArr.length; i += 1) {
//   total += newArr[i];
// }
// console.log(total);

// !second method:

// const newArr = [...managerSalaries, ...developersSalaries];

// let total = 0;

// for (const salary of newArr) {
//   total += salary;
// }
// console.log(total);

// !third method:

// let total = 0;

// for (let i = 0; i < managerSalaries.length; i += 1) {
//   total += managerSalaries[i];
//   if (developersSalaries[i]) {
//     total += developersSalaries[i];
//   }
// }

// console.log(total);

// const str = "test";
// let newStr = "";

// for (let i = str.length - 1; i >= 0; i -= 1) {
//   newStr += str[i];
// }

// let newStr = "";
// const str = "abcd";

// for (let i = 0; i < str.length / 2; i += 1) {
//   newStr = str[i] + newStr;
//   console.log(str[str.length - 1 - i]);
// }

// console.log(newStr);

// ?? Моя практика!!!!!!!!!!!!!!

//  const arr = [7, 5, "6", 18];
// const arr1 = ["3,5,6", 6];

// console.log(addLastArrValue(arr));

// function addFirstArrValue(arr) {
//   const arrLength = arr.unshift(8, 9, 10);
//   console.log(arr);
//   return arrLength;
// }

// console.log(addFirstArrValue(arr));

// ==============================

// function remoweLastEl(arr) {
//   console.log(arr);
//   const valueRemovedLastEl = arr.pop();
//   console.log(arr);
//   return valueRemovedLastEl;
// }

// console.log(remoweLastEl(arr));

// function removeFirstEl(arr) {
//   const valueRemovedFirstEl = arr.shift();
//   console.log(arr);
//   return valueRemovedFirstEl;
// }

// console.log(removeFirstEl(arr));

// =================================

// function sliceArrPart(arr) {
//   console.log(arr);
//   const newArr = arr.slice(2, 6);
//   return newArr;
// }

// console.log(sliceArrPart(arr));

// ==================================

// function mergeArrays(arr, arr1) {
//   const concarArr = arr.concat(arr1);
//   console.log(concarArr);
// }

// console.log(mergeArrays(arr, arr1));

// ==========================================

// function doublesValue(arr) {
//   const newDoblesValueArr = arr.map((el) => el * 2);
//   return newDoblesValueArr;
// }

// console.log(doublesValue(arr));

// ===========================================

// function filterGreaterThan(arr) {
//   return arr.filter((el) => el > 7);
// }
// console.log(filterGreaterThan(arr));

// ==================================

// function removeByIndex(arr, index) {
//   return arr.slice(index, index + 1);
// }

// console.log(removeByIndex(arr, 2));

// =======================================

// function removeByIndex(arr, index) {
//   const splicePart = arr.splice(index, 2);
//   console.log(splicePart);
//   return arr;
// }

// console.log(removeByIndex(arr, 2));

// console.log(arr);

// const newArr = [...arr];
// const spliceArr = newArr.splice(1, 1);

// const newArsArr = newArr.push("Arsen", "Shulika");

// console.log(arr);
// console.log(spliceArr);
// console.log(newArr);
// console.log(newArsArr);
// ======================================

// const arr2 = [10, 20, 30];
// arr2.splice(1, 2, "15", "25"); // На індексі 1 не видаляємо нічого, а додаємо `15`
// console.log(arr2); // [10, 15, 20, 30]

// =======================================

// function replaceElement(index, newValue, secondValue) {
//   const arr = [7, 5, "6", 18];
//   const newArr = [...arr];
//   const result = newArr.splice(index, 2, newValue, secondValue);
//   console.log(arr);
//   console.log(newArr);

//   return result;
// }

// console.log(replaceElement(2, "ars", "en"));

// =========================================

// const buttons = document.querySelectorAll(".btn");

// const handelClick = (event) => console.log(event.target.textContent);

// buttons.forEach((button) => button.addEventListener("click", handelClick));

// =====================================

// function createAdderss(type) {
//   debugger;
//   const address = type.toUpperCase();
//   return function (name) {
//     return `${address} ${name}`;
//   };
// }

// const addressUserOne = createAdderss("Гражданин");
// const addressUserTwo = createAdderss("Гражданика");

// console.log(addressUserOne("вася"));
// console.log(addressUserOne("оля"));

// ======================================

// function createPlayer(name) {
//   debugger;
//   let score = 0;
//   return function scoreCount() {
//     score += 1;
//     return `${name} - ${score} балов`;
//   };
// }

// const playerOne = createPlayer("ars");
// const playerTwo = createPlayer("ola");

// console.log(playerOne());
// console.log(playerTwo());

// const people = [
//   { name: "Станислав", year: 2000 },
//   { name: "Василий", year: 1986 },
//   { name: "Александр", year: 1990 },
//   { name: "Владимир", year: 2008 },
// ];

// const comments = [
//   { text: "Отличный пост!", id: 523423 },
//   { text: "Мне нравится", id: 823423 },
//   { text: "Продолжай в том же духе", id: 2039842 },
//   { text: "Все аццццтой !!!!!", id: 123523 },
//   { text: "Нормально", id: 542328 },
// ];

//## Методы Some и Every

// Array.prototype.some() -> Проверить, что по крайней мере одному из людей исполнилось 16 лет.
// !const curDate = new Date();
// !const curYear = curDate.getFullYear();

// !const checkYear = people.some((person) => curYear - person.year > 38);

// !console.log(curYear);

// Array.prototype.every() -> Проверить, что каждому из людей исполнилось 16 лет.

// !const checkYear = people.every(
// !  (person) => new Date().getFullYear() - person.year > 16
// !);

// !console.log(checkYear);

// ## Array.prototype.find() -> Возвращает первый элемент массива, который удовлетворяет нашим требованиям

// !console.log(comments.find((comment) => comment.id === 823423));

// Задача: найти комментарий, c номером ID - 823423

// ## Array.prototype.findIndex() -> Возвращает индекс первого элемента, который удовлетворяет нашим требованиям
// !const indexOne = comments.findIndex((comment) => comment.id === 123523);
// !console.log(indexOne);

// Задача: удалить из массива комментарий с номером ID 123523
// 1. Находим индекс нужного нам комментария
// !const index = comments.findIndex((comment) => comment.id === 2039842);
// !console.log(index);
// 2. Удаляем комментарий из массива (используем метод splice())
// !const deleteItem = comments.splice(index, 1);
// !console.log(deleteItem);
// !console.log(comments);
// 2.1 Удаляем комментарий из массива (используем метод slice() и оператор spread)

// slice() создает новый массив, куда копирует елементы начиная с индекса старт и до end (не включая end)
// !const newArr = comments.slice(0, index);
// !console.log(newArr);
// используем оператор spread для копирования всех элементов первого и воторого массива в новый массив newComments:
// !const newComments = [...comments, ...newArr];
// !console.log(newComments);

// ??Дано масив чисел. Відсортуйте його у порядку зростання.

// const numbers = [5, 2, 2, 9, 1, 1, 7, 3];

// let newArr = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers.indexOf(numbers[i]) === i) {
//     newArr.push(numbers[i]);
//   }
// }

// newArr.sort((a, b) => a - b);

// console.log(newArr);

// ??Є масив слів. Відсортуйте його за довжиною слова — від найкоротшого до найдовшого.

// const words = ["apple", "banana", "kiwi", "grape", "strawberry"];

// let newArr = [];

// newArr = words.sort((a, b) => a.length - b.length);

// console.log(newArr);

// ?? Є масив об'єктів, що представляють людей. Відсортуйте їх за віком у порядку зростання.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
// ];

// let newArr = [];

// newArr = people.toSorted((a, b) => a.age - b.age);

// console.log(newArr);

// ??  Знайдіть усі слова-паліндроми.

// Вхід: ["ротор", "потоп", "літак", "око", "вода"];
// Вихід: ["ротор", "потоп", "око"];

// const arr = ["ротор", "потоп", "літак", "око", "вода"];

// let newArr = [];

// for (let i = 0; i < arr.length; i += 1) {
//   const index = arr[i].split("").reverse().join("");
//   if (index === arr[i]) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// ?? Знайдіть найдовше слово - паліндром.

Вхід: "Радар бачив рівень на воді";
Вихід: "рівень";
