const Elevator = require('./elevator.js');
const Person = require('./person.js');

let myElevator = new Elevator();
let myPerson = new Person("Fulanito",1,3);
let myPerson2 = new Person("Menganito",9,5);

myElevator.call(myPerson)
myElevator.call(myPerson2)
myElevator.start();
setInterval(function(){
  if (myElevator.floor < 10 && myElevator.direction == "up"){
    myElevator.floorUp();
  }
  else if (myElevator.floor > 0 && myElevator.direction == "down"){
    myElevator.floorDown();
  }
  if(myElevator.floor == 10){
    myElevator.direction = "down";
  }
  else if(myElevator.floor == 0){
    myElevator.direction = "up";
  }
}, 1000)