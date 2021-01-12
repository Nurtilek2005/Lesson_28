// function expression
// let sayHello = function () {
//   alert('Hello World!');
// };

// sayHello ();

// function decloration
// function sayHello () {
//   alert('Hello World!');
// }

// let getRandomNumberFromOneTo = function (limit) {
//   return Math.floor( Math.random() * limit + 1 );
// };

// console.log(getRandomNumberFromOneTo(10));
// console.log(getRandomNumberFromOneTo(100));

// let askForNumber = function (message, min, max) {
//   let numer;
//   do {
//     number = parseInt( prompt(message) )
//   } while(!number || number < min || number > max)
//   return number
// };
// let result = askForNumber('Укажите число от 1 до 10', 1, 10);

// console.log(result)

// let getSum = function (...rest) {
//   let sum = 0;
//   rest.push(55);

//   for(let item of rest) {
//     sum += item;
//   }

//   return sum;
// };

// let result = getSum(1,2,3,4,5,6,7,8,9,10);
// console.log(result);


// let currentCows = 7;
// let currentChickens = 20;
// let currentSheeps = 40;
let animals = [
  {name: 'cows', count: 7, max: 2},
  {name: 'chickens', count: 20, max: 4},
  {name: 'sheeps', count: 40, max: 3},
]

let printFarmInventory = function (units) {
  for(let item of units) {
    console.log(zeroFill(item.count, item.max,) + ' ' + item.name);
  }
  // console.log(zeroFill(cows, 3) + ' cows');
  // console.log(zeroFill(chickens, 3) + ' chickens');
  // console.log(zeroFill(sheeps, 3) + ' sheeps');
};

let zeroFill = function (number, width) {
  let string = String(number);
  while(string.length < width) {
    string = "0" + string;
  }
  return string;
}

printFarmInventory(animals);