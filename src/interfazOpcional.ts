interface Person {
  firstName: string;
  lastName?: string;
}

const persona: Person = {
  firstName: 'Marcos',
};

console.log(`hola ${persona}`);
