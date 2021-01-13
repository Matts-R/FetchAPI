const cep = document.querySelector("#cep");
const logradouro = document.querySelector("#form");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo))
      document.querySelector("#" + campo).value = result[campo];
  }
}

cep.addEventListener("blur", (event) => {
  let numeroCep = cep.value.replace('-', '');
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
  }

  fetch(`https://viacep.com.br/ws/${numeroCep}/json`, options)
    .then((response) => {
      response.json()
        .then(data => {
          console.log(data);
          showData(data);
        });
    })
    .catch();
});