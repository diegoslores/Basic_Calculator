let numero;
let conjuntoA = "";
let operator = "";
let conjuntoB = "";

let boton = document.querySelector(".buttons");
boton.addEventListener("click", onClick);

function onClick(evento) {
  numero = evento.target.innerText;
  let resultado = document.querySelector(".result");

  if (numero === "C") {
    C();
  } else if (parseInt(numero) <= 9) {
    if (operator === "") {
      numA();
    } else if (operator !== "") {
      numB();
    }
    console.log(`conjuntoA ${conjuntoA}`);
    console.log(`conjuntoB ${conjuntoB}`);
  } else {
    operator = numero;
    console.log(`operator ${operator}`);
  }

  function numA() {
    resultado.innerText += numero;
    conjuntoA += numero;
  }
  function numB() {
    resultado.innerText += numero;
    conjuntoB += numero;
  }

  function C() {
    resultado.innerText = "0";
    conjuntoA = "";
    conjuntoB = "";
  }
  /*function operation() {
    switch (true) {
      case numero === "+":
        resultado.innerText = " ";
        resultado.innerText += numero;
        conjuntoB += numero;
        break;
      case numero === "-":
        break;
      case numero === "÷":
        break;
      case numero === "x":
        break;
      default:
        alert("alert");
    }
  }*/
}

/*if (
      operator ===
      "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "÷"
    ) {
      numero = "";
      
    } else {
      
    }
}*/
