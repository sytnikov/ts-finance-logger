var character = 'princess';
console.log(character);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(30));
// arrays
var names = ['mario', 'luigi', 'yoshi'];
names.push('li');
var mixed = [3, 5, 'string', false];
mixed.push(true);
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.belt = 'white';
ninja.name = 'luigi';
// explicit types
var character1;
var age1;
var isLoggedIn;
// arrays
var ninjas = []; // an array of strings, initialising an empty array
// union type to allow different types of variables to be in an array
var mixed1 = [];
var uid; // this variable could be a string or a boolean
// objects
var ninjaOne = {
    name: 'yoshi',
    age: 30
};
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 30, beltColor: 'black' };
