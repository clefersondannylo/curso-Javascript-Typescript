//Criando um objeto literal
const person = {
  nome: "Cleferson",
  sobrenome: "Nascimento",
  idade: 24,
};
//Desestruturando o objeto person
const { idade, nome, sobrenome } = person;
// console.log(idade, nome, sobrenome);

//Função que cria um objeto.
function createPerson(firstName, lastName, age) {
  return { nome: firstName, sobrenome: lastName, idade: age };
}

//Argumento != Parâmetros
//Argumentos são os valores passados para os parâmetros

let firstPerson = createPerson("Cleferson", "Nascimento", 24);
console.log(firstPerson);

//Posso colocar métodos dentro de objetos
function createPersonTwo(firstName, lastName, age) {
  return {
    nome: firstName,
    sobrenome: lastName,
    idade: age,
    sayHello() {
      return `Hello, ${this.nome}.`;
    },
    sayGoodbye() {
      return `Goodbye, ${this.nome}.`;
    },
  };
}
let personTwo = createPersonTwo("Cleferson", "Nascimento", 24);

console.log(personTwo.sayHello());
console.log(personTwo.sayGoodbye());
