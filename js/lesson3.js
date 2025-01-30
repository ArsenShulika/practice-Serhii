function countDigits(x) {
  //   debugger;
    const str = String(x).split("");
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
        sum +=1
    }
  console.log(str);
}

console.log(countDigits(21321));

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
//   debugger;
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
