function identity<T>(arg: T): T {
  return arg;
}

let numero = identity<number>(42);
console.log(`Número: ${numero}`); // 42

let texto = identity<string>('Hola TypeScript');
console.log(`Texto: ${texto}`); // "Hola TypeScript"

let booleano = identity<boolean>(true);
console.log(`Booleano: ${booleano}`); // true
