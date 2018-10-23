let numero;
let conjuntoA = "";
let operator = "";
let conjuntoB = "";

let boton = document.querySelector(".buttons");
boton.addEventListener("click", onClick);

function onClick(evento) {
  numero = evento.target.innerText;
  let resultado = document.querySelector(".result");

  if (parseInt(numero) <= 9) {
    oneNine();
  } else if (numero === "C") {
    C();
  } else {
    operation();
  }
  console.log(conjuntoA);

  function oneNine() {
    resultado.innerText += numero;
    conjuntoA += numero;
  }
  function C() {
    resultado.innerText = "0";
    conjuntoA = "";
    conjuntoB = "";
  }
  function operation() {
    switch (true) {
      case true:
        break;
      default:
        alert("alert");
    }
  }
}
