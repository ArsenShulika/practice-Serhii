/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

//70 === 01:10
//90 === 01:30

// const hours = String(Number.parseInt(90 / 60)).padStart(2, 0);
// console.log(hours);

// const minutes = String(90 % 60).padStart(2, 0);
// console.log(minutes);

// console.log(`${hours}:${minutes}`);

// console.log(Math.max(20, 10, 50, 40));

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JS'?.
  ? Дізнайтесь позицію на якій перебуває цей підрядок
*/

// const str = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";

// console.log(str.includes("JS"));

// console.log(str.toLowerCase().indexOf("js"));

// console.log(str.endsWith("C++"));

// console.log(str.startsWith("HTML"));

// console.log(str.replaceAll(",", ";"));

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const someStr = "Vasyl Pupkin is 24 years old";

// const userName = someStr.slice(0, 13);
// console.log(userName);

// const age = someStr.slice(16, 18);
// console.log(age);

// const arr = someStr.split(" ");

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);

// console.log("a".charCodeAt(0));
// console.log("A".charCodeAt(0));

// Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log("a" < "b");
// console.log("b" < "a");
// console.log("A" < "a");
// console.log("a p p l e" < "a p p n anana");
// console.log("apple" > "yellow");
// console.log("bananana" < "apple");
// console.log(true < false);
// console.log(false < true);

//!!!!! Не суворе рівенство (==)
//!!!!! console.log(null > 0); //false
//!!!!! console.log(null == 0); //false
//!!!!! console.log(null >= 0); //true

// console.log(undefined === null);

// console.log("123" === 123);
// console.log(true === "1");
// console.log(4 === 5 - true);

// // Суворе рівенство (===)
// console.log("123" === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

// // Не дорівнює (!=)
// console.log("4" != 4);
// // Суворе не дорівнює (!==)
// console.log("4" !== 4);
// console.log(NaN != NaN);

// const result = 4 && 0 && "Hello!";
// console.log(result);

// const result2 = 4 && "20";
// console.log(result2);

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log(true && 0 && "kiwi");
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);

// console.log(2 + 5 + "" + 1 + 0);
// console.log("" + 1 - 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);
//  console.log("" + 1);  !!!!!!!!!!
// console.log(3 > 2 > 1);

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = "abcde";

// if (str.startsWith("b")) {
//   console.log("tak");
// } else {
//   console.log("no");
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/

// const min = 0;

// if (min >= 0 && min < 15) {
//   console.log("first");
// } else if (min >= 15 && min < 30) {
//   console.log("second");
// } else if (min >= 30 && min < 45) {
//   console.log("third");
// } else if (min >= 45 && min < 60) {
//   console.log("fourth");
// }

// const fruits = ["🍎", "🍑", "🍇", "🍑", "🍌", "🍋", "🍑"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[fruits.length - 1 - i]);
// }

// for (let i = fruits.length - 1; i >= 0; i -= 1) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// console.log(fruits.push("a")); повертае довжину масиву

// =================================================================

// const str = "Привіт, як справи?";

// const letters = "аеєиіїоуюя";

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.split(" ").join("_"));

// let sum = 0;

// for (const char of str) {
//   if (letters.includes(char)) {
//     sum += 1;
//   }
// }
// console.log(sum);

// ======================================================================

// const str = " Привіт Світ ";

// console.log(str.trim());
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase().trim().replaceAll(" ", "-"));

// ================================================

// const str = "Привіт, як справи?";

// const word = "справи";

// console.log(str.includes(word));
// console.log(str.indexOf(word));

// ===================================================================

// const str = "Привіт, як справи?";

// console.log(String(str.split(" ").length));

// ==================================================

// const str = "Привіт";

// console.log(str.split("").reverse().join(""));

// ========================================================================

// const str = "Привіт, як справи?";

// const letters = /[аеєиіїоуюяАЕЄИІЇОУЮЯ]/g;

// const result = str.replace(letters, "");

// console.log(result);

// ===========================================================================

// const str = "Привіт, як справи?";

// const letters = "аеєиіїоуюя";

// let newStr = "";

// for (const char of str) {
//   if (!letters.includes(char)) {
//     newStr += char;
//   }
// }

// console.log(newStr);

// ================================================================

// const str = "трактор";

// let newObj = {};

// for (const char of str) {
//   if (newObj[char]) {
//     newObj[char] += 1;
//   } else {
//     newObj[char] = 1;
//   }
// }

// console.log(newObj);
