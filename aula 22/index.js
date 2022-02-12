//Operadores Lógicos
/*
&& => And => e
|| => Or => ou
!  => Not => negação
*/

let isEmpty = new Boolean(false).valueOf();
let isExpensive = new Boolean(true).valueOf();

//Usando o operador and, o retorno só será true,se todos os valores forem true;
console.log(isEmpty && isExpensive); ///false

//Usando o operador or, o retorno só será false,se todos os valores forem false. Caso contrário, sempre retornará true;
console.log(isEmpty || isExpensive); ///true

//Usando o operador not, o valor booleano será invertido;
console.log(!isEmpty); ///true
console.log(!isExpensive); ///false
