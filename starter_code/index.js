const Elevator = require('./elevator.js');

var myElevator = new Elevator();

myElevator.start();

setTimeout(() => myElevator.stop(), 5000)