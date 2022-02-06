function createUser() {
  const persons = [];
  const result = document.querySelector(".resultado");
  const form = document.querySelector(".form");

  const nome = form.querySelector(".nome");
  const sobrenome = form.querySelector(".sobrenome");
  const peso = form.querySelector(".peso");
  const altura = form.querySelector(".altura");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    persons.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(persons);
    result.innerHTML += `
        ${nome.value},
        ${sobrenome.value},
        ${peso.value},
        ${altura.value}<br>`;
    form.reset();
  });
}
createUser();
