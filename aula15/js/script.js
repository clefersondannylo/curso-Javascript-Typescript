const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-escolhido");
numeroTitulo.innerHTML = numero;
const calculos = document.getElementById("texto");
calculos.innerHTML = `
<p>Raiz quadrada:${numero ** 0.5}</p>
<p>É inteiro: ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondado para cima${Math.ceil(numero)}</p>
<p>Arredondado para baixo${Math.floor(numero)}</p>
<p>com duas casas decimais${numero.toFixed(2)}</p>
`;
