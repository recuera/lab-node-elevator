const Elevator = require('./elevator.js');
const Person = require('./person.js');

let myElevator = new Elevator();
let myPerson = new Person("Fulanito",1,3);
let myPerson2 = new Person("Menganito",9,5);

myElevator.call(myPerson)
myElevator.call(myPerson2)
myElevator.start();