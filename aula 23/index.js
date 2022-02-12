/*
Curto Circuito em JS
    && => and
    || => or 
*/
/*Valores considerados falsos no JS

false => valor false literal
Valores Falsy:
    0;
    null;
    undefined;
    '';
    NaN;
*/
//O operador and é usado para retornar o primeiro valor false. Caso não haja, ele retornará o último valor verdadeiro;
let userExist = new Boolean(true).valueOf();
function sayHello() {
  return "oi";
}
console.log(userExist && sayHello());

//O operador or é usado para retornar o primeiro valor verdadeiro. Caso não haja, ele retornará o último valor false;
let selectedColor = "#223333";
let defaultColor = selectedColor || "";
//Caso o primeiro valor seja true, seu valor será utilizado. Caso contrário, o segundo valor será utilizado.
console.log(defaultColor); /// '#223333'
