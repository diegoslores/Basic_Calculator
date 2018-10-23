let numero;
let conjunto = [];

let boton = document.querySelector(".buttons");
boton.addEventListener("click", onClick);

function onClick(evento) {
  numero = evento.target.innerText;
  let resultado = document.querySelector(".result");

  if (parseInt(numero) <= 9) {
    resultado.innerText += numero;
    conjunto.push(parseInt(numero));
  } else if (numero === "C") {
    resultado.innerText = "0";
    conjunto = [];
  }

  console.log(conjunto);
}
