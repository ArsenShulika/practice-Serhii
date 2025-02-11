const arr = [1, 3, 3, 5, 6, 8, 8, 9];

// function getSum(arr) {
//   let sum = 0;
//   arr.forEach((item) => (sum += item));
//   return sum;
// }

// console.log(getSum(arr));

// function getRes(arr) {
//   return arr.map((item) => item * 2);
// }

// console.log(getRes(arr));

// function getRes(arr) {
//   return arr.filter((item) => item % 2 === 0);
// }

// console.log(getRes(arr));

// function getRes(arr) {
//   return arr.filter((item, i) => arr.indexOf(item) === i);
// }

// console.log(getRes(arr));

// function getRes(arr) {
//   return arr.find((item) => item === 21);
// }

// console.log(getRes(arr));

// function getRes(arr) {
//   return arr.some((item) => item > 5);
// }

// console.log(getRes(arr));

// function getRes(arr) {
//   return arr.flatMap((item) => item);
// }

// console.log(getRes(arr));

// function getRes(arr) {
//   return arr.reduce((acc, item) => (acc += item), 0);
// }

// console.log(getRes(arr));

const vehicles = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//1.Реалізувати фільтер за властивістю amount і отримати
//тільки назву моделі

function getName(vehicles, amount) {
  return vehicles
    .filter((vehicle) => vehicle.amount >= amount)
    .map((vehicle) => vehicle.model);
  //   return vehicle.map((item) => item.model);
}

console.table(getName(vehicles, 12));

//2.Отримати машини на розпродажі і сортувати за спаданням ціни

// function getName(vehicles) {
//   return vehicles
//     .filter((vehicle) => vehicle.onSale)
//     .toSorted((a, b) => b.price - a.price);
//   //   return vehicle.map((item) => item.model);
// }

// console.table(getName(vehicles));

// function getName(vehicles) {
//   return vehicles.reduce((acc, car) => {
//     if (acc[car.type]) {
//       acc[car.type] += 1;
//     } else {
//       acc[car.type] = 1;
//     }

//     return acc;
//   }, {});
// }

// console.table(getName(vehicles));

// function getType(vehicles) {
//   return vehicles.reduce(
//     (acc, car) => ({
//       ...acc,
//       [car.type]: acc[car.type] ? acc[car.type] + 1 : 1,
//     }),
//     {}
//   );
// }

// console.table(getType(vehicles));

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Git",
      "Promises",
      "AJAX",
      "GitHub",
    ],
  },
];

//6. Зібрати в allTopics масив усіх предметів усіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

function getAllTopics(courses) {
  //   return courses
  //     .reduce((acc, topic) => {
  //       return [...acc, ...topic.topics];
  //     }, [])
  //     .filter((item, index, array) => array.indexOf(item) === index);

  return courses
    .flatMap((course) => course.topics)
    .reduce((acc, topic) => {
      if (acc.includes(topic)) {
        return acc;
      }
      acc.push(topic);
      return acc;
    }, []);
}

console.log(getAllTopics(courses));
