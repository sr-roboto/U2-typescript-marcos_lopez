class Car {
  public make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

let autito = new Car('Renault');

autito.drive();
