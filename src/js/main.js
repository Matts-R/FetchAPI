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

  fetchCep(numeroCep, options);
})

//APRIMORANDO O EXEMPLO COM O USO DE ASYNC E AWAIT
async function fetchCep(cep, options) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json`, options);
  const cepJson = await response.json();

  showData(cepJson);
}

//FAZENDO UMA REQUISIÇÃO SEM O USO DE ASYNC E AWAIT
// fetch(`https://viacexp.com.br/ws/${numeroCep}/json`, options)
//   .then(response => {
//     response.json()
//       .then(data => {
//         console.log(data);
//         showData(data);
//       });
//   })
//   .catch((reason) => console.log(reason));