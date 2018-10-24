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
  } else if (numero === "=") {
    operation();
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
    conjuntoA += numero;
    resultado.innerText = conjuntoA;
  }
  function numB() {
    conjuntoB += numero;
    resultado.innerText = conjuntoB;
  }

  function C() {
    resultado.innerText = "0";
    conjuntoA = "";
    conjuntoB = "";
    operator = "";
  }
  function operation() {
    switch (true) {
      case operator === "+":
        suma = parseInt(conjuntoA) + parseInt(conjuntoB);
        resultado.innerText = suma;
        conjuntoA = "";
        conjuntoB = "";
        operator = "";
        console.log(`suma ${suma}`);
        break;
      case operator === "-":
        resta = conjuntoA - conjuntoB;
        resultado.innerText = resta;
        conjuntoA = "";
        conjuntoB = "";
        operator = "";
        console.log(`resta ${resta}`);
        break;
      case operator === "÷":
        division = conjuntoA / conjuntoB;
        resultado.innerText = division;
        conjuntoA = "";
        conjuntoB = "";
        operator = "";
        console.log(`division ${division}`);
        break;
      case operator === "x":
        mult = conjuntoA * conjuntoB;
        resultado.innerText = mult;
        conjuntoA = "";
        conjuntoB = "";
        operator = "";
        console.log(`mult ${mult}`);
        break;
      default:
        alert(numero);
    }
  }
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
