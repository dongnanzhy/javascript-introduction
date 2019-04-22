console.log('Hello World');
// console.error("This is an error");
// console.warn("This is a warning");

/* ============================
// var, let, const
// var is local, may cause conflict
============================== */

// let can reassign values
let age = 30;
age = 31;
console.log(age);

// const cannot be changed
// always use const unless you knwo you will change the value
const age2 = 30;

/* ================================
// data types: String, Number, Booolean, null, undefined, Symbol
==================================== */
const name = 'John';
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;

console.log(typeof rating)

// Concatenation String
console.log('My name is ' + name + ' my rating is ' + rating);
// Template String; Note here is not using "quotes"
console.log(`My name is ${name} and my rating is ${age}`);

// String manipulation
const s = 'Hello World';
console.log(s.toUpperCase());
console.log(s.length);
console.log(s.substring(0, 5))
console.log(s.split(''))

/* ===============================
// Arrays
=================================*/
const numbers = new Array(1,2,3,4,5);
const fruits = ['apple', 'oranges', 'pears', 10, true];
fruits.push('mangos'); // append
fruits.unshift('strawberries'); // appendleft
fruits.pop();   // pop

console.log(fruits[1]);
console.log(fruits.indexOf('oranges'));


/* =========================
  Object literals
===========================*/
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: 'xxx',
    city: 'Seattle',
    state: 'WA'
  }
}
console.log(person.lastName, person.firstName);

// this is not assgin, this is to get value
const { firstName, lastName, address: { city }} = person;
console.log(firstName);

//Jsonify
const personJSON = JSON.stringify(person);
console.log(personJSON)


/* ====================
loop
=======================*/
const hobbies = ['music', 'movies', 'sports'];
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}
// forEach, map, filter
hobbies.forEach(function(hobby) {
  console.log(hobby);
})
const map_hobbies = hobbies.map(function(hobby) {
  return hobby;
})
const filtered_hobbies = hobbies.filter(function(hobby) {
  return hobby == 'movies';
})


/* =========================
 if condition
============================*/
const xx = '10'
// Note here it's triple "===""
if(xx === 10) {
  console.log('xx is 10')
} else {
  console.log('xx is NOT 10')
}

/* =======================
functions
======================== */
function addNums(num1, num2) {
  console.log(num1 + num2)
}
const addNums2 = (num1, num2) => num1 + num2

addNums(4, 3)
console.log(addNums2(5,5))