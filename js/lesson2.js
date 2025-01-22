const arr = [7, 5, "6", 18];
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
// const newArr = [...arr];

// function replaceElement(arr, index, newValue, secondValue) {
//   const result = newArr.splice(index, 1, newValue, secondValue);
//   console.log(newArr);
//   console.log(arr);
//   return newArr;
// }

// console.log(replaceElement(arr, 2, "ars", "en"));

// =========================================
