const Elevator = require('./elevator.js');

let myElevator = new Elevator();

myElevator.floorUp();
myElevator.log();
myElevator.floorDown();
myElevator.log();
myElevator.floorDown();
myElevator.log();


// myElevator.start()
// setTimeout(() => myElevator.stop(), 5000)