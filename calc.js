let numero = "";
let conjunto = [];

let boton = document.querySelector(".buttons");
boton.addEventListener("click", onClick);

function onClick(evento) {
  numero = evento.target.innerText;
  let resultado = document.querySelector(".result");
  resultado.innerText += numero;
  if (parseInt(numero) <= 9) {
    conjunto.push(parseInt(numero));
  }
  console.log(conjunto);
}
