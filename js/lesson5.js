// const people = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
// ];

// function getNarcis(people) {
//   const narcis = people.find((person) => person.know.length === 0);
//   console.log(narcis);
//   const allknow = people.every((person) => {
//     if (person.name === narcis.name) {
//       return true;
//     }
//     return person.know.includes(narcis.name);
//   });
//   if (allknow) {
//     return narcis.name;
//   }
// }

// console.log(getNarcis(people));

// const people2 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];

// function getNarcis(people) {
//   const narcis = people.find((person) => person.know.length === 0);
//   console.log(narcis);
//   const allknow = people.every((person) => {
//     if (person.name === narcis.name) {
//       return true;
//     }
//     return person.know.includes(narcis.name);
//   });
//   if (allknow) {
//     return narcis.name;
//   }
//   return "Немає нарциса";
// }

// console.log(getNarcis(people2));

// const people3 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];

// function getNarcis(people) {
//   const narcis = people.find((person) => person.know.length === 0);
//   console.log(narcis);
//   const allknow = people.every((person) => {
//     if (person.name === narcis.name) {
//       return true;
//     }
//     return person.know.includes(narcis.name);
//   });
//   if (allknow) {
//     return narcis.name;
//   }
//   return "Немає нарциса";
// }

// console.log(getNarcis(people3));

// const people4 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Eva"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];

// function getNarcis(people) {
//   const narcis = people.find((person) => person.know.length === 0);
//   if (!narcis) {
//     return "немає нарциса";
//   }
//   console.log(narcis);
//   const allknow = people.every((person) => {
//     if (person.name === narcis.name) {
//       return true;
//     }
//     return person.know.includes(narcis.name);
//   });
//   if (allknow) {
//     return narcis.name;
//   }
//   return "Немає нарциса";
// }

// console.log(getNarcis(people4));

// const numbers = [1, 1, 2, 2, 3, 3];
// const newNumbers = numbers.map((num) => {
//   return 5;
// });
// console.log(newNumbers);

// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

// console.log(numbers.filter((num, index, arr) => arr.indexOf(num) === index));

// const newArr = numbers.reduce((acc, num) => {
//   if (!acc.includes(num))
//   acc.push(num);
//   return acc;
// }, []);
// console.log(newArr);

// const str = "aabbcc";

// const uniqeChar = str
//   .split("")
//   .reduce((acc, char) => {
//     if (!acc.includes(char)) {
//       acc.push(char);
//     }
//     return acc;
//   }, [])
//   .join("");

// console.log(uniqeChar);

// const uniqeChar = str.split("").reduce((acc, char) => {
//   if (!acc.includes(char)) {
//     acc += char;
//   }
//   return acc;
// }, "");

// console.log(uniqeChar);

/*
? Відфільтруйте масив heroes за ключем об'єкта franchise.
*/

// const heroes = [
//   { name: "Batman", franchise: "DC" },
//   { name: "Ironman", franchise: "Marvel" },
//   { name: "Thor", franchise: "Marvel" },
//   { name: "Superman", franchise: "DC" },
// ];

// function getFranchize(heroes, franchise) {
//   return heroes.reduce((acc, heroe) => {
//     if (heroe.franchise === franchise) {
//       if (acc[heroe.franchise]) {
//         acc[heroe.franchise] = [...acc[heroe.franchise], heroe];
//       } else {
//         acc[heroe.franchise] = [heroe];
//       }
//     }
//     return acc;
//   }, {});
// }

// function getFranchize(heroes, franchise) {
//   //   return heroes.reduce((acc, heroe) => {
//   //     if (heroe.franchise === franchise) {
//   //       acc.push(heroe);
//   //     }
//   //     return acc;
//   //   }, []);

//   return heroes.filter((heroe) => heroe.franchise === franchise);
// }

// console.log(getFranchize(heroes, "Marvel"));

// function addId(heroes) {
//   return heroes.map((heroe, index) => ({ ...heroe, id: index }));
// }

// console.log(addId(heroes));

// const numbers = [1, 2, 0, 5, 6];

// [3, 8, 6];
// function getOddNumbers(numbers) {
//   return numbers.filter((num) => num % 2 === 0)
// }

// console.log(getOddNumbers(numbers));

// function addNumbers(numbers) {
//   return numbers.map((num, index) => {
//     return num + (numbers[index + 1] || 0);
//   });
// }

// function addNumbers(numbers) {
//   return numbers.reduce((acc, num, index) => {
//     if (index > 0 && index % 2 !== 0) {
//       return acc;
//     }
//     acc.push(num + (numbers[index + 1] || 0));
//     return acc;
//   }, []);
// }

// console.log(addNumbers(numbers));

// const numbers = [1, 2, 3, 4, 5];

// function addNumbers() {
//   return numbers.map((num, index) => num + (numbers[index + 2] || 0));
// }

// console.log(addNumbers(numbers));
// //Нарциса знають всі, нарцис незнає нікого

// function isPalindrome(word) {
//   //   return word === word.split("").reverse().join("") ? true : false;
//   let str = "";
//   for (let i = 0; i < word.length; i += 1) {
//     str += word[word.length - 1 - i];
//   }
//   return str === word ? true : false;
// }

// console.log(isPalindrome("racecar"));

// function removeDuplicates(arr) {
//   return arr.reduce((acc, num, index, arr) => {
//     if (!acc.includes(num)) {
//       acc.push(num);
//     }
//     return acc;
//   }, []);
// }

// function removeDuplicates(arr) {
//   let newArr = [];
//   arr.forEach((el) => {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   });
//   return newArr.toSorted((a, b) => b.localeCompare(a));
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(
//   removeDuplicates(["banana", "apple", "cherry", "cherry", "banana"])
// );

// function longestWord(str) {
//   return str
//     .split(" ")
//     .reduce((acc, word) => (acc.length < word.length ? word : acc), "");
// }

// console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

// function findMax(num) {
//   return Math.max(...num);
// }

// console.log(findMax([10, 20, 5, 8, 99, 30])); // 99

// function flatten(arr) {
//   let result = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }

// console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// function sortStrings(arr) {
//   return arr.toSorted((a, b) => a.localeCompare(b));
// }
// console.log(sortStrings(["banana", "apple", "cherry"])); // ['apple', 'banana', 'cherry']

// function customMap(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i], i, array)); // Передаємо елемент, індекс та весь масив
//   }
//   return result;
// }

// // Перевірка:
// const numbers = [1, 2, 3];
// const doubled = customMap(numbers, (num) => num * 2);
// console.log(doubled); // [2, 4, 6]

// function deepClone(obj) {
//   // Перевіряємо, чи є obj об'єктом і чи не є null
//   if (obj === null || typeof obj !== 'object') {
//     return obj; // Якщо це не об'єкт, повертаємо значення без змін
//   }

//   // Якщо obj є масивом
//   if (Array.isArray(obj)) {
//     const arrayCopy = [];
//     for (let i = 0; i < obj.length; i++) {
//       arrayCopy[i] = deepClone(obj[i]); // Рекурсивно клонуємо елементи масиву
//     }
//     return arrayCopy;
//   }

//   // Якщо obj — це об'єкт
//   const objCopy = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       objCopy[key] = deepClone(obj[key]); // Рекурсивно клонуємо властивості
//     }
//   }
//   return objCopy;
// }

// // Перевірка:
// const original = { a: 1, b: { c: 2, d: [3, 4] } };
// const cloned = deepClone(original);

// console.log(cloned); // { a: 1, b: { c: 2, d: [3, 4] } }
// console.log(cloned.b.d === original.b.d); // false (це має бути окремий масив)

// const products = [
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Phone", category: "Electronics", price: 800 },
//   { name: "Table", category: "Furniture", price: 150 },
//   { name: "Chair", category: "Furniture", price: 90 },
//   { name: "Headphones", category: "Electronics", price: 50 },
// ];

// function getPrice(products) {
//   const filteredProducts = products.filter((product) => product.price > 100);

//   const arrOfNewProducts = filteredProducts.map((product) => product.name);

//   const totalPrice = filteredProducts.reduce(
//     (acc, product) => acc + product.price,
//     0
//   );

//   return { name: arrOfNewProducts, totalPrice };
// }

// console.log(getPrice(products));

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 22 },
// ];

// function getUserNames(users) {
//   return users.map((user) => user.name);
// }

// console.log(getUserNames(users));
// ["Alice", "Bob", "Charlie"]

// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
//   { name: "Monitor", price: 300 },
// ];

// function getExpensiveProducts(products) {
//   return products.filter((product) => product.price > 100);
// }

// console.log(getExpensiveProducts(products));
// [{ name: "Laptop", price: 1500 }, { name: "Monitor", price: 300 }]

// const cart = [
//   { name: "Laptop", price: 1500, quantity: 1 },
//   { name: "Mouse", price: 50, quantity: 2 },
//   { name: "Keyboard", price: 100, quantity: 1 },
// ];

// function getTotalPrice(cart) {
//   return cart.reduce((acc, order) => {
//     acc += order.quantity * order.price;
//     return acc;
//   }, 0);
// }

// console.log(getTotalPrice(cart));
// 1700

// const orders = [
//   { customer: "Alice", total: 300 },
//   { customer: "Bob", total: 150 },
//   { customer: "Alice", total: 450 },
//   { customer: "Charlie", total: 500 },
//   { customer: "Bob", total: 300 },
// ];

// function groupOrders(orders) {
//   return orders.reduce((acc, order) => {
//     acc[order.customer] = (acc[order.customer] || 0) + order.total;
//     // if (!acc[order.customer]) {
//     //   acc[order.customer] = order.total;
//     // } else {
//     //   acc[order.customer] += order.total;
//     // }
//     return acc;
//   }, {});
// }

// console.log(groupOrders(orders));
// {
//   Alice: 750,
//   Bob: 450,
//   Charlie: 500
// }

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function countWords(words) {
//   return words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(countWords(words));
// { apple: 3, banana: 2, orange: 1 }

// const products = [
//   { name: "Laptop", price: 1500, category: "Electronics" },
//   { name: "Shoes", price: 100, category: "Fashion" },
//   { name: "Phone", price: 800, category: "Electronics" },
//   { name: "T-shirt", price: 50, category: "Fashion" },
//   { name: "Tablet", price: 600, category: "Electronics" },
// ];

// function getTotalElectronicsPrice(products) {
//   return products
//     .filter((product) => product.category === "Electronics")
//     .reduce((acc, product) => {
//       acc += product.price;
//       return acc;
//     }, 0);
// }

// console.log(getTotalElectronicsPrice(products));
// Очікуваний результат: 2900

// const products = [
//   { name: "Laptop", price: 1500, category: "Electronics" },
//   { name: "Shoes", price: 100, category: "Fashion" },
//   { name: "Phone", price: 800, category: "Electronics" },
//   { name: "T-shirt", price: 50, category: "Fashion" },
//   { name: "Tablet", price: 600, category: "Electronics" },
// ];

// function groupByCategory(products) {
//   return products.reduce((acc, product) => {
//     acc[product.category] = acc[product.category] || [];
//     acc[product.category].push(product);
//     return acc;
//   }, {});
// }

// console.log(groupByCategory(products));
/*
Очікуваний результат:
{
  Electronics: [
    { name: "Laptop", price: 1500, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Tablet", price: 600, category: "Electronics" }
  ],
  Fashion: [
    { name: "Shoes", price: 100, category: "Fashion" },
    { name: "T-shirt", price: 50, category: "Fashion" }
  ]
}
*/

// const orders = [
//   { user: "Alice", items: ["Laptop", "Phone"] },
//   { user: "Bob", items: ["Shoes", "T-shirt"] },
//   { user: "Alice", items: ["Tablet"] },
//   { user: "Charlie", items: ["Laptop", "Tablet", "Phone"] },
// ];

// function countUserPurchases(orders) {
//   return orders.reduce((acc, { user, items }) => {
//     acc[user] = (acc[user] || 0) + items.length;
//     return acc;
//   }, {});
// }

// console.log(countUserPurchases(orders));
/*
Очікуваний результат:
{
  Alice: 3,
  Bob: 2,
  Charlie: 3
}
*/

// const reviews = [
//   "The laptop is great and the battery is long-lasting",
//   "This phone is great and has a good camera",
//   "Great battery life, good performance",
// ];

// function countUniqueWords(reviews) {
//   return reviews
//     .join(" ")
//     .toLowerCase()
//     .replaceAll(",", "")
//     .split(" ")
//     .reduce((acc, word) => {
//       acc[word] = (acc[word] || 0) + 1;
//       return acc;
//     }, {});
// }

// console.log(countUniqueWords(reviews));
/*
Очікуваний результат (порядок може бути іншим):
{
  the: 2,
  laptop: 1,
  is: 2,
  great: 3,
  and: 2,
  battery: 2,
  long-lasting: 1,
  this: 1,
  phone: 1,
  has: 1,
  a: 1,
  good: 2,
  camera: 1,
  life: 1,
  performance: 1
}
*/

// const books = [
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Fiction",
//     year: 1951,
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Fiction",
//     year: 1960,
//   },
//   {
//     title: "Sapiens",
//     author: "Yuval Noah Harari",
//     genre: "Non-fiction",
//     year: 2011,
//   },
//   {
//     title: "Educated",
//     author: "Tara Westover",
//     genre: "Non-fiction",
//     year: 2018,
//   },
//   { title: "1984", author: "George Orwell", genre: "Fiction", year: 1949 },
// ];

// function groupeByGenre(books) {
//   return books.reduce((acc, book) => {
//     acc[book.genre] = acc[book.genre] || [];
//     acc[book.genre].push(book);
//     return acc;
//   }, {});
// }

// console.log(groupeByGenre(books));

// const orders = [
//   { id: 1, amount: 100, status: "shipped" },
//   { id: 2, amount: 200, status: "pending" },
//   { id: 3, amount: 150, status: "shipped" },
//   { id: 4, amount: 50, status: "pending" },
// ];

// function getSum(orders) {
//   return orders
//     .filter((order) => order.status === "shipped")
//     .reduce((acc, order) => {
//       acc += order.amount;
//       return acc;
//     }, 0);
// }

// console.log(getSum(orders));

// const employees = [
//   { name: "Jharlie", salary: 4500 },
//   { name: "Alice", salary: 5000 },
//   { name: "Bob", salary: 3000 },
//   { name: "Charlie", salary: 4000 },
// ];

// function getFlteredSalary(employees) {
//   return employees
//     .filter((employee) => employee.salary > 3500)
//     .toSorted((a, b) => a.salary - b.salary);
// }

// console.log(getFlteredSalary(employees));

// const products = [
//   { id: 1, name: "Laptop", price: 1000 /* discountedPrice: 900 */ },
//   { id: 2, name: "Phone", price: 500 /* discountedPrice: 450 */ },
//   { id: 3, name: "Tablet", price: 800 /* discountedPrice: 720  */ },
// ];

// function createNewKey(products) {
//   return products.map((product) => ({
//     ...product,
//     discountedPrice: product.price * 0.9,
//   }));
// }

// console.log(createNewKey(products));

// const user = {
//   name: "Arsen",
//   age: 30,
//   address: {
//     city: "Wrocław",
//     country: "Poland",
//   },
//   contacts: {
//     email: "arsen@example.com",
//     phone: "+48 123 456 789",
//   },
// };

// const {
//   name,
//   address: { city },
//   contacts: { email },
// } = user;

// console.log(name);
// console.log(city);
// console.log(email);

// const newUser = {
//   ...user,
//   isAdmin: true,
//   address: { ...user.city },
//   contacts: { ...user.email },
// };

// console.log(newUser);

// const newObj = Object.assign({}, user);
// newObj.isAdmin = true;
// console.log(newObj);

// // поверхнева копія! Object.assign

// const deepClone = JSON.parse(JSON.stringify(user));
// deepClone.isAdmin = true;
// console.log(deepClone);

// const deepStructureClone = structuredClone(user);
// deepStructureClone.isAdmin = true;
// console.log(deepStructureClone);

// const car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2022,
//   owner: {
//     name: "Arsen",
//     age: 30,
//     address: {
//       city: "Wrocław",
//       country: "Poland",
//     },
//   },
//   specs: {
//     horsepower: 670,
//     range: "652 km",
//     features: ["Autopilot", "Electric", "Smart Display"],
//   },
// };

// const {
//   brand,
//   model,
//   owner: { name },
//   owner: {
//     address: { city },
//   },
//   specs: {
//     features: [firstFeature],
//   },
// } = car;

// console.log(brand); // "Tesla"
// console.log(model); // "Model S"
// console.log(name); // "Arsen"
// console.log(city); // "Wrocław"
// console.log(firstFeature); // "Autopilot"

// // const updateCar = structuredClone(car);
// // updateCar.isInsured = true;
// // updateCar.owner.address.city = "Krakow";
// // updateCar.specs.features.push("SelfDriven");
// // console.log(updateCar);

// // console.log(updateCar.brand); // "Tesla"
// // console.log(updateCar.model); // "Model S"
// // console.log(updateCar.owner.name); // "Arsen"
// // console.log(updateCar.owner.address.city); // "Wrocław"
// // console.log(updateCar.specs.features);

// // const updateCar = JSON.parse(JSON.stringify(car));
// // updateCar.isInsured = true;
// // console.log(updateCar);

// // const updateCar = Object.assign({}, car);
// // console.log(updateCar);

// const deepClonedCar = structuredClone(car);
// deepClonedCar.year = 2025;
// deepClonedCar.owner.address.country = "Germany";
// deepClonedCar.specs.features.pop();
// console.log(deepClonedCar);

// function updateCar(car, updates) {
//   // Створюємо глибоку копію об'єкта car
//   let newCar = structuredClone(car);

//   // Проходимо по всіх оновленнях
//   for (const key in updates) {
//     if (updates.hasOwnProperty(key)) {
//       const keys = key.split("."); // наприклад, "owner.address.city" → ["owner", "address", "city"]
//       let current = newCar;
//       // Ітеруємо до останнього ключа
//       for (let i = 0; i < keys.length - 1; i++) {
//         current = current[keys[i]];
//       }
//       // Оновлюємо останній ключ
//       current[keys[keys.length - 1]] = updates[key];
//     }
//   }
//   return newCar;
// }

// // Викликаємо функцію та зберігаємо результат у змінну
// const updatedCar = updateCar(car, {
//   year: 2025,
//   "owner.address.city": "Berlin",
// });

// console.log(updatedCar.year); // 2025
// console.log(updatedCar.owner.address.city); // "Berlin"

// console.log(updatedCar);

// const person = {
//   name: "Arsen",
//   age: 30,
//   address: {
//     city: "Wrocław",
//     country: "Poland",
//   },
// };

// const {
//   name,
//   age,
//   address: { city },
// } = person;

// console.log(name); // "Arsen"
// console.log(age); // 30
// console.log(city); // "Wrocław"

// 2️⃣ Деструктуризація масиву
// Завдання:
// Є масив colors. Використовуючи деструктуризацію, отримай перший (primaryColor), другий (secondaryColor) та третій (thirdColor) елементи.

// const colors = ["red", "blue", "green"];

// const [primaryColor, secondaryColor, thirdColor] = colors;

// console.log(primaryColor); // "red"
// console.log(secondaryColor); // "blue"
// console.log(thirdColor); // "green"

// 3️⃣ Деструктуризація з параметрами за замовчуванням
// Завдання:
// Є об'єкт product. Деструктуризуй name, price, і stock. Якщо stock відсутній у об'єкті, то встанови для нього значення 100 за замовчуванням.

// const product = {
//   name: "Laptop",
//   price: 1500,
// };

// const { name, price, stock = 100 } = product;

// console.log(name); // "Laptop"
// console.log(price); // 1500
// console.log(stock); // 100 (за замовчуванням)

// 4️⃣ Перейменування змінних при деструктуризації
// Завдання:
// Є об'єкт userData. Використовуючи деструктуризацію, отримай значення firstName, lastName, location і перейменуй їх у fName, lName та city відповідно.

// const userData = {
//   firstName: "John",
//   lastName: "Doe",
//   location: "Berlin",
// };

// const { firstName: fName, lastName: lName, location: city } = userData;

// console.log(fName); // "John"
// console.log(lName); // "Doe"
// console.log(city); // "Berlin"

// 5️⃣ Деструктуризація вкладених об'єктів
// Завдання:
// Є об'єкт company. Використовуючи деструктуризацію, отримай назву компанії, ім'я CEO та email головного розробника.

// const company = {
//   name: "Tech Corp",
//   ceo: {
//     name: "Alice Johnson",
//     age: 45,
//   },
//   employees: {
//     developers: [
//       { name: "Bob", email: "bob@techcorp.com" },
//       { name: "Charlie", email: "charlie@techcorp.com" },
//     ],
//   },
// };

// const {
//   name: companyName,
//   ceo: { name: ceoName },
//   employees: {
//     developers: [{ email: devEmail }, { email: dEmail }],
//   },
// } = company;

// console.log(companyName); // "Tech Corp"
// console.log(ceoName); // "Alice Johnson"
// console.log(devEmail); // "bob@techcorp.com"
// console.log(dEmail); // "charlie@techcorp.com"

// 6️⃣ Деструктуризація в аргументах функції
// Завдання:
// Напиши функцію displayUserInfo, яка приймає об'єкт user і деструктуризує name, age та email, а потім виводить їх у консоль.

// const user = {
//   name: "Sophia",
//   age: 25,
//   email: "sophia@example.com",
// };

// function displayUserInfo({ name, age, email }) {
//   console.log(name);
//   console.log(age);
//   console.log(email);
// }

// displayUserInfo(user);
// // Вивід у консоль:
// // Name: Sophia
// // Age: 25
// // Email: sophia@example.com
// 7️⃣ Деструктуризація зі значенням за замовчуванням + рест-оператор
// Завдання:
// Є масив чисел. Деструктуризуй його, щоб отримати перший елемент firstNum, другий secondNum, а решту значень помісти в масив restNumbers.

// const numbers = [10, 20, 30, 40, 50];

// const [firstNum, secondNum, ...restNumbers] = numbers;

// console.log(firstNum); // 10
// console.log(secondNum); // 20
// console.log(restNumbers); // [30, 40, 50]

// const userProfile = {
//   name: "Dmytro",
//   age: 30,
//   address: {
//     city: "Wrocław",
//     country: "Poland",
//   },
//   hobbies: ["Reading", "Traveling", "Cooking"],
// };

// const updatedProfile = structuredClone(userProfile);

// updatedProfile.age = 35;
// updatedProfile.address.city = "Krakow";
// updatedProfile.hobbies.push("Cycling");

// console.log(updatedProfile);

// const defaultSettings = {
//   theme: "light",
//   language: "English",
//   notifications: true,
// };

// const userSettings = {
//   theme: "dark",
//   language: "Ukrainian",
// };

// const finalSettings = Object.assign({}, defaultSettings, userSettings);
// const finalSettings = { ...userSettings, ...defaultSettings };

// console.log(finalSettings);

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 22 },
// ];

// function getUserAges(users) {
//   return users.map((user) => user.age);
// }

// console.log(getUserAges(users));
// // [25, 30, 22]

// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 18880 },
//   { name: "Monitor", price: 300 },
// ];

// function getMostExpensiveProduct(products) {
//   return products.reduce((acc, product) =>
//     acc.price > product.price ? acc : product
//   );
// }

// console.log(getMostExpensiveProduct(products));
// // { name: "Keyboard", price: 18880 }

// const orders = [
//   { id: 1, customer: "Alice", total: 300 },
//   { id: 2, customer: "Bob", total: 150 },
//   { id: 3, customer: "Charlie", total: 500 },
//   { id: 4, customer: "Alice", total: 100 },
// ];

// function filterOrdersByMinTotal(orders, totalNumb) {
//   return orders.filter((order) => order.total > totalNumb);
// }

// console.log(filterOrdersByMinTotal(orders, 200));
// // [{ id: 1, customer: "Alice", total: 300 }, { id: 3, customer: "Charlie", total: 500 }]

// const warehouse1 = [
//   { name: "Laptop", quantity: 10 },
//   { name: "Mouse", quantity: 50 },
//   { name: "Keyboard", quantity: 30 },
// ];

// const warehouse2 = [
//   { name: "Laptop", quantity: 5 },
//   { name: "Mouse", quantity: 20 },
//   { name: "Monitor", quantity: 15 },
// ];

// function mergeWarehouses(warehouse1, warehouse2) {
//   const combined = [...warehouse1, ...warehouse2]; // Об'єднуємо два склади в один масив

//   const merged = combined.reduce((acc, item) => {
//     if (acc[item.name]) {
//       acc[item.name] += item.quantity; // Якщо товар уже є, додаємо кількість
//     } else {
//       acc[item.name] = item.quantity; // Інакше створюємо запис
//     }
//     return acc;
//   }, {});
//   // Перетворюємо об'єкт назад у масив
//   return Object.keys(merged).map((name) => ({ name, quantity: merged[name] }));
// }

// console.log(mergeWarehouses(warehouse1, warehouse2));
// // [{ name: "Laptop", quantity: 15 }, { name: "Mouse", quantity: 70 }, { name: "Keyboard", quantity: 30 }, { name: "Monitor", quantity: 15 }]

// const purchases = [
//   { customer: "Alice", item: "Laptop" },
//   { customer: "Bob", item: "Mouse" },
//   { customer: "Alice", item: "Monitor" },
//   { customer: "Charlie", item: "Keyboard" },
//   { customer: "Alice", item: "Mouse" },
//   { customer: "Bob", item: "Keyboard" },
// ];

// function getCustomerRanking(purchases) {
//   return purchases.reduce((acc, purchase) => {
//     acc[purchase.customer] = (acc[purchase.customer] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(getCustomerRanking(purchases));
// // { Alice: 3, Bob: 2, Charlie: 1 }

// !!!!!!!!!!!!!!!!!!!!!!! DOM
