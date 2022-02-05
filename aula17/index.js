//A função recebe um parâmetro e exibe ele no terminal.
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

//Posso armazenar o retorno da função em uma variável.... Tomando cuidado,pois se o retorno não estiver especificado, ela retornará undefined.
let helloCleferson = sayHello("Cleferson");

console.log(helloCleferson); /// undefined

//Função com o retorno especificado
function sayGoodbye(name) {
  return `Goodbye,${name}!`;
}
let goodbyeCleferson = sayGoodbye("Cleferson");

console.log(goodbyeCleferson); /// Goodbye, Cleferson!

function soma(a, b) {
  //Uso do typeof para checar o tipo dos parâmetros
  ///if (typeof a === "number" && typeof b === "number")

  //Uso do isNaN para checar o tipo dos parâmetros
  ///if (Number.isNaN(a) === false && Number.isNaN(b) ===false)

  //Uso do isNaN e do operador de negação para checar se o tipo dos parâmetros era number
  if (!Number.isNaN(a) && !Number.isNaN(b)) {
    let result = a + b;
    return result;
  }
  return `Not a Number`;
}
console.log(soma("2", 3));

//Atribuindo valores default para os parâmetro
function raizQuadrada(a = 3) {
  return (a ** 0.5).toFixed(2);
}
console.log(raizQuadrada(8)); //2.83

//Criando funções anônimas
const raiz = function (b) {
  return (b ** 0.5).toFixed(2);
};
console.log(raiz(5)); //2.24

//Criando funções com arrow functions
const dobro = (e) => e * 2;

console.log(dobro(5)); // 10
