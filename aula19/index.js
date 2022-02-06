//Valores primitivos: string, number, boolean, undefined, null, bigint, symbol
//Valores por Referência: array, object, functions

//Valor Primitivo
/// Ao atribuir o valor dele para alguma variável, é criada uma cópia do valor atual da "variável original" e atribuída à nova variável. Portanto, as alterações na "variável original" não irão refletir no valor da variável criada a partir da original.

let firstName = "maria";
let copyName = firstName;
console.log(firstName, copyName);
firstName = "marta";
console.log(firstName, copyName);

//Valor por Referência
///Ao atribuir o valor dela para outra variável, o que ocorre é que as duas variáveis passam a apontar para o mesmo lugar na memória que o valor da variável está. Ou seja, o valor se torna global para as duas variáveis.

let a = [1, 2, 3];
let b = a;

console.log(a, b);
b[2] = 5;
console.log(a, b);
//E se eu quiser apenas criar uma cópia, e não manter esse comportamento de "variável global" para as duas ?
//Podemos usar o Spread Operator para usar o comportamento de criar uma cópia da variável original.

const firstUser = { firstName: "João", lastName: "Pedro" };
const secondUser = { ...firstUser };

console.log(firstUser, secondUser); ///{ firstName: 'João', lastName: 'Pedro' } { firstName: 'João', lastName: 'Pedro' }
firstUser.firstName = "luy"; /// Alterei no objeto original
console.log(firstUser, secondUser); ///{ firstName: 'luy', lastName: 'Pedro' } { firstName: 'João', lastName: 'Pedro' }
