const Person = require('./person.js');

class Elevator {
  constructor(){
    this.floor       = 0;
    this.MAXFLOOR    = 10;
    this.requests    = [];
    this.direction   = "up";
    this.interval;
    this.waitingList = [];
    this.passengers  = [];
  }

  start() { 
    this.interval = setInterval(() => this.update() ,1000)
  }
  stop() { 
    clearInterval(this.interval)
  }
  update() { 
    return this.log();
  }
  _passengersEnter() { 
    for (let i = 0; i < this.waitingList.length; i++){
      if (this.floor == this.waitingList[i].originFloor){
        this.requests.push(this.waitingList[i].destinationFloor)
        this.passengers.push(this.waitingList[i]);
        console.log(`${this.waitingList[i].name} has entered the elevator.`);
        this.waitingList.splice(i, 1);
        this.requests.splice(i, 1);
      }
    }
  }
  _passengersLeave() { 
    for (let i = 0; i < this.passengers.length; i++){
      if (this.floor == this.passengers[i].destinationFloor){
        console.log(`${this.passengers[i].name} has left the elevator.`);
        this.requests.splice(i, 1);
        this.passengers.splice(i,1);
      }
    }
  }
  floorUp() {
    if(this.floor < this.MAXFLOOR){
      this.floor++;
      if(this.waitingList.length > 0){
        this._passengersEnter();
      }
      if(this.passengers.length > 0){
        this._passengersLeave();
      }
    }
  }
  floorDown() { 
    if(this.floor > 0){
      this.floor--;
      if(this.waitingList.length > 0){
        this._passengersEnter();
      }
      if(this.passengers.length > 0){
        this._passengersLeave();
      }
    }
  }
  call(pers) {
    this.waitingList.push(pers);
    this.requests.push(pers.originFloor);
  }
  log() { 
    return console.log(`Direction ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;