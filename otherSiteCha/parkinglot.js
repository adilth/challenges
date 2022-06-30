/* solve parking lot
create a class manages an imaginary parking lot
*/

class ParkingLot {
  slots = [];
  constructor(parkSize) {
    this.slots = new Array(parkSize).fill(null);
  }
  park(cardId) {
    console.log(`parking card ${cardId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];
      if (slot == null) {
        this.slots[i] = cardId;
        return true;
      }
    }
  }

  remove(cardId) {
    console.log(`leaving car ${cardId}`);
    if (this.slots.every((slot) => slot !== cardId)) {
      return false;
    }
    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];
      if (slot == cardId) {
        this.slots[i] = null;
        return true;
      }
    }
  }
  getSlots() {
    console.log(`parking slot ${this.slots}`);
    return this.slots;
  }
  getSize() {
    console.log(`parking size is ${this.slots.length}`);
    return this.getSize.length;
  }
  getAvailable() {
    const availableSbots = this.slots.filter((slot) => slot === null).length;
    console.log(`available parking Sbots ${availableSbots}`);
    return availableSbots;
  }
  isFull() {
    return this.getAvailable() === 0;
  }
}

const parking = new ParkingLot(5);
parking.getAvailable(); //available parking Sbots 5
parking.getSize(); //parking size is 5
parking.park(3); //parking card 3
parking.isFull(); //available parking Sbots 4
parking.park(2); //parking card 2
parking.getAvailable(); //available parking Sbots 3
parking.getSlots(); //parking slot 3,2,,,
parking.park(5); //parking card 5
parking.park(1); //parking card 1
parking.remove(3); //leaving car 3
parking.getAvailable(); //available parking Sbots 2
parking.getSlots(); //parking slot ,2,5,1,
