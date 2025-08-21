export class Car {
  private make;

  constructor(make: string) {
    this.make = make;
  }

  getMake() {
    console.log(this.make);
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

let autito = new Car('Renault');

autito.getMake();
