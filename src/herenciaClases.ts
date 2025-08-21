import { Car } from './clasePropiedadesPrivadas';

class ElectricCar extends Car {
  public batteryLife;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log(`se esta cargando..`);
  }
}

let autitoElectrico = new ElectricCar('Tesla', 98);

autitoElectrico.charge();
