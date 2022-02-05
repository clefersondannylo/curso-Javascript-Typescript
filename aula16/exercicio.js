let lembretesArea = [];
let lembretes = document.getElementById("lembretes");

function addLembreteFirst() {
  let area = document.getElementById("lembretes-area");
  lembretesArea.unshift(area.value + " ");
  area.innerHTML = "";
  lembretes.innerText = `${lembretesArea}`;
  console.log(lembretesArea);
}
function addLembreteLast() {
  let area = document.getElementById("lembretes-area");
  lembretesArea.push(area.value + " ");
  area.innerHTML = "";
  lembretes.innerText = `${lembretesArea}`;
  console.log(lembretesArea);
}
function removeLembreteFirst() {
  lembretesArea.shift();
  lembretes.innerText = `${lembretesArea}`;
  console.log(lembretesArea);
}
function removeLembreteLast() {
  lembretesArea.pop();
  lembretes.innerText = `${lembretesArea}`;
  console.log(lembretesArea);
}
