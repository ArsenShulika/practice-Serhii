// function backToFront(str, symbolsCount) {
//   if (symbolsCount <= str.length) {
//     const getSubstring = str.slice(str.length - symbolsCount, str.length);
//     const newStr = getSubstring + str + getSubstring;
//     return newStr;
//   }
//   return str;
// }

// console.log(backToFront("hello", 1)); // ohelloo
// console.log(backToFront("abc", 3)); // abcabcabc
// console.log(backToFront("world", 2)); // ldworldld
// console.log(backToFront("world", 20)); // world

// function removeDuplicate(arr) {
//
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicate([1, 2, 3, 2, 3, 1, 1])); // [1,2,3]
// console.log(removeDuplicate(["a", 1, "2", "b", 1, "2", "b"])); // ['a', 1, '2', 'b']

// function countDigits(x) {
//   const str = String(x).split("");
//   let sum = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     sum += 1;
//   }
//   console.log(sum);
// }

// console.log(countDigits(21321));

// function countDigits(x) {
//   debugger;
//   let sum = 0;
//   for (let i = 1; i <= x; i += 1) {
//     sum += 1 / (i * i);
//   }
//   return sum.toFixed(2);
// }

// console.log(countDigits(5));

// function rangeSum1(x, y) {
//   let res = 0;
//   let sum = 0;
//   for (let i = x; i <= y; i += 1) {
//     sum += i;
//     res += sum;
//   }
//   return res;
// }

// console.log(rangeSum1(0, 3));

// function createString(x, y, step) {
//   let num = [];
//   for (let i = x; i <= y; i += step) {
//     num.push(i);
//   }
//   return num.join(" ");
// }

// console.log(createString(0, 20, 5));

// // Создать div
// const divContainer = document.createElement("div");

// // Добавить к нему класс wrapper
// divContainer.classList.add("wrapper");
// // Поместить его внутрь тэга body
// const tagBody = document.querySelector("body");
// tagBody.prepend(divContainer);

// // Создать заголовок H1 "DOM (Document Object Model)"
// const title = document.createElement("h1");
// title.textContent = "DOM (Document Object Model)";

// // Добавить H1 перед DIV с классом wrapper
// tagBody.prepend(title);

// // Создать список <ul></ul>
// const unorList = document.createElement("ul");
// // Добавить в него 3 элемента с текстом "один, два, три"
// const item1 = document.createElement("li");
// const item2 = document.createElement("li");
// const item3 = document.createElement("li");

// item1.textContent = "один";
// item2.textContent = "два";
// item3.textContent = "три";

// unorList.append(item1, item2, item3);

// // Поместить список внутрь элемента с классом wrapper

// divContainer.append(unorList);

// // Создать изображение

// const img = document.createElement("img");

// // Добавить следующие свойства к изображению
// // 1. Добавить атрибут source

// img.setAttribute("src", "https://picsum.photos/240");

// // 2. Добавить атрибут width со значением 240
// img.setAttribute("width", "240");

// // 3. Добавить класс super

// img.classList.add("super");

// // 4. Добавить свойство alt со значением "Super Man"

// img.alt = "Super Man";

// // Поместить изображение внутрь элемента с классом wrapper
// divContainer.append(img);

// // Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами

// const listDiv = `<div class="pDiv">
//   <p></p>
//   <p></p>
// </div>`;

// // Поместить этот DIV до элемента <ul></ul>
// unorList.insertAdjacentHTML("beforeend", listDiv);

// // Добавить для 2-го параграфа класс text
// const lastText = document.querySelector("p:last-of-type");

// lastText.classList.add("text");
// // Удалить 1-й параграф

// const firstText = document.querySelector("p:first-of-type");

// firstText.remove();

// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year

// const generateAutoCard = (brand, year, color) => {
//   const curDate = new Date();
//   const curYear = curDate.getFullYear();
//   return `
//         <div class="autoCard">
//             <h2>${brand.toUpperCase()} ${year}</h2>
//             <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${
//     curYear - year
//   } лет.</p>
//             <p>Цвет: ${color}</p>
//             <button>Удалить</button>
//         </div>
//     `;
// };

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos

// const newDiv = document.createElement("div");
// newDiv.classList.add("autos");

// Создать 3 карточки авто, используя функцию generateAutoCard
// const carsList = [
//   { brand: "Tesla", year: 2015, color: "Красный" },
//   { brand: "Lexus", year: 2016, color: "Серебристый" },
//   { brand: "Nissan", year: 2012, color: "Черный" },
// ];

// const markUp = carsList
//   .map((car) => {
//     return generateAutoCard(car.brand, car.year, car.color);
//   })
//   .join("");

// Поместить эти 3 карточки внутрь DIV с классом autos

// newDiv.insertAdjacentHTML("beforeend", markUp);

// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper

// divContainer.append(newDiv);

// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => button.addEventListener("click", handleClick));

// function handleClick(e) {
//   const currentButton = e.currentTarget;
//   currentButton.closest(".autoCard").remove();
// }

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = [1, 2, 6, 8, 3, 2, 6, 7, 9, 6, 6, 6, 5, 6, 5];

// const newArr = [];

// for (let i = 0; i < employees.length; i += 1)
//   if (employees.indexOf(employees[i]) === i) {
//     newArr.push(employees[i]);
//   }

// console.log(newArr);

// function countOccurrences(arr) {
//   let count = {};
//   arr.forEach((item) => {
//     count[item] = (count[item] || 0) + 1;
//   });
//   return count;
// }

// for (const item of arr) {
//   if (count[item]) {
//     count[item] += 1;
//   } else {
//     count[item] = 1;
//   }
// }
// return count;

// console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4]));

/*

? ЗАНЯТТЯ 3;



? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
? Потрібно порахувати середнє значення аргументів (чисел)


*/

// function calcAverageStringLength(...rest) {
//   let sumLength = 0;
//   let count = 0;

//   for (let i = 0; i < rest.length; i++) {
//     if (typeof rest[i] === "string") {
//       sumLength += rest[i].length;
//       count += 1;
//     }
//   }

//   return count === 0 ? 0 : sumLength / count;
// }

// console.log(calcAverageStringLength("hello", "world", 123, true)); // 5
// console.log(calcAverageStringLength("a", "ab", "abc")); // 2
// console.log(calcAverageStringLength(10, false)); // 0

// function calcAverage(...rest) {
//   console.log(rest);
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < rest.length; i += 1) {
//     if (typeof rest[i] === "number") {
//       sum += rest[i];
//       count += 1;
//     }
//   }
//   return sum / count;
// }

// console.log(calcAverage(10, 10, 50));

// const film = {
//   title: "Matrix",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!",
//   rating: 4,
//   actors: ["Aiden", "Mason", "Jimmy"],
//   isAdult: true,
//   testFunction() {},
// };

// const filmTitle = "title";
// console.log(film[filmTitle]);
// console.log(film.title);
// console.log(film["title"]);

// коли ключ знаходиться в змінній, то ми до обєкта звертаємось через квадратні дужки;

// const film2 = film;

// console.log("film", film);
// console.log("film2", film2);

// film.title = "matrix2";

// console.log("film", film);
// console.log("film2", film2);

// console.log(({} === {}));

// console.log(Object.keys(film));

// const obj = { a: 1, b: 2, c: 3 };

// let keys = Object.keys(obj);

// console.log(keys);

// const obj = { a: 10, b: "hello", c: 30, d: true };

// function getKeys(obj) {
//   let arr = [];
//   let keys = Object.keys(obj);
//   for (let key of keys) {
//     if (typeof obj[key] === "number") {
//       arr.push(key);
//     }
//   }
//   return arr;
// }

// console.log(getKeys(obj));

// const obj = { st: 1, longKey: 2, key: 3 };

// function deleteKeys(obj) {
//   let arr = [];
//   const keys = Object.keys(obj);
//   for (let key of keys) {
//     if (key.length >= 3) {
//       arr[key] = obj[key];
//       console.log(arr[key]);
//     }
//   }
//   return arr;
// }

// console.log(deleteKeys(obj));

// const arr = Object.keys(film);

// for (const item of arr) {
//   console.log(film[item]);
// }

// console.log(Object.values(film));

// const arr = Object.entries(film);

// console.log(Object.entries(film));

// for (const [key, value] of arr) {
//   console.log(key);
//   console.log(value);

//   console.log(`${key}:${value}`);
// }

// при диструктуризації з масиву вказуємо нові вигадані назви змінних, а в обєкті ті назви ключів які є в ньому

// const { title, description, rating, actors, isAdult } = film;
// console.log(title);
// console.log(description);
// console.log(rating);
// console.log(isAdult);

// const newFilm = Object.create(film);
// console.log(newFilm);

// const newFilm = Object.assign({}, film);
// const newFilm = { ...film };

//? Object.create(): створює новий об'єкт із заданим прототипом.
//? Object.assign(): створює новий об'єкт, копіюючи всі властивості (без зв'язку з прототипом).

//? Відмінності:
//? Object.create():
//? Новий об'єкт успадковує властивості та методи від об'єкта-прототипу.
//? Використовується для створення об'єктів із зв'язком прототипів.

//? Object.assign():
//? Створює "плоску" копію (глибокого копіювання не відбувається, тільки для верхнього рівня).
//? Застосовується для клонування об'єктів або об'єднання їх властивостей.
//? Коли що використовувати?
//? Використовуйте Object.create(), якщо потрібна поведінка наслідування (прототипи).
//? Використовуйте Object.assign(), якщо потрібна незалежна копія об'єкта.

// !копия обєкта, яка не копіює функції

// const newFilm = JSON.parse(JSON.stringify(film));
// film.title = "matrix2";
// film.actors.push("mango");
// console.log("newfilm", newFilm);
// console.log("film", film);

// !для копії обєкта краще використати biblioteku Loodash, deepclone;

// const newFilm = structuredClone(film);
// console.log(newFilm);

const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
  {
    id: 6,
    title: "Duna 2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив з усіма назвами фільмів.
function getAllTitlesOfFilms(films) {
  const arrOfFilms = [];
  for (const film of films) {
    arrOfFilms.push(film.title);
  }
  return arrOfFilms;
}

console.log(getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// function findFilmByName(films, filmTitle) {
//   let nameOfFilm = "";
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       nameOfFilm = film;
//     }
//   }
//   //   // if (nameOfFilm !== "") {
//   //   //   return nameOfFilm;
//   //   // }
//   //   // return "is not found";
//   return nameOfFilm ? nameOfFilm : "Is not found";
// }

// console.log(findFilmByName(filmoteka, "Duna 2"));

//? Напишіть функцію findFilmByWord(films, filmTitle), яка шукає фільми які включають дане слово.

// function findFilmByWord(films, filmTitle) {
//   const arrOfFilms = [];
//   for (const obj of films) {
//     if (obj.title.includes(filmTitle)) {
//       arrOfFilms.push(obj);
//     }
//   }
//   return arrOfFilms.length !== 0 ? arrOfFilms : "Not Found";
// }

// console.log(findFilmByWord(filmoteka, "1"));

// ? обчислення чисел Фібоначчі

// function fibonacci(n) {
//   let a = 0,
//     b = 1,
//     temp;

//   for (let i = 0; i < n; i++) {
//     temp = a;
//     a = b;
//     b = temp + b;
//   }
//   return a;
// }

// console.log(fibonacci(10));
