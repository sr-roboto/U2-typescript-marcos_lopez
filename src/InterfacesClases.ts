interface shape {
  area(): number;
}

class Circle {
  public radio;

  constructor(radio: number) {
    this.radio = radio;
  }

  area(): number {
    let resultado = (Math.PI * this.radio) ^ 2;
    return resultado;
  }
}

let circulo: shape = new Circle(10);

console.log(`el area es ${circulo.area()}`);
