const character = 'princess';

console.log(character);

const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(30));

// arrays
let names = ['mario', 'luigi', 'yoshi'];

names.push('li');

let mixed = [3, 5, 'string', false];

mixed.push(true);

// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
}

ninja.age = 40;
ninja.belt ='white';
ninja.name = 'luigi';

// explicit types
let character1: string;
let age1: number;
let isLoggedIn: boolean;

// arrays
let ninjas: string[] = []; // an array of strings, initialising an empty array

// union type to allow different types of variables to be in an array
let mixed1: (string|number)[] = [];

let uid: string|boolean; // this variable could be a string or a boolean

// objects
let ninjaOne: object = {
  name: 'yoshi',
  age: 30
}

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = { name: 'mario', age: 30, beltColor: 'black'}

// any type

let age: any;

let mixe2: any[] = [];

let ninja2: { name: any, age: any};

