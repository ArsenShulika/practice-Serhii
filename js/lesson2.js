// const arr = [7, 5, "6", 18];
// const arr1 = ["3,5,6", 6];
// console.log(arr.push(8, 9, 10));
// console.log(arr);

// function addLastArrValue(arr) {
//   const arrLength = arr.push(8, 9, 10);
//   console.log(arr);
//   return arrLength;
// }

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

const people = [
  { name: "Станислав", year: 2000 },
  { name: "Василий", year: 1986 },
  { name: "Александр", year: 1990 },
  { name: "Владимир", year: 2008 },
];

const comments = [
  { text: "Отличный пост!", id: 523423 },
  { text: "Мне нравится", id: 823423 },
  { text: "Продолжай в том же духе", id: 2039842 },
  { text: "Все аццццтой !!!!!", id: 123523 },
  { text: "Нормально", id: 542328 },
];

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
