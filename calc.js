const state = {
  numero: "",
  conjuntoA: "",
  operator: "",
  conjuntoB: ""
};

let boton = document.querySelector(".buttons");
boton.addEventListener("click", onClick);

function onClick(evento) {
  state.numero = evento.target.innerText;
  let resultado = document.querySelector(".result");

  if (state.numero === "C") {
    C();
  } else if (state.numero === "=") {
    operation();
  } else if (parseInt(state.numero) <= 9) {
    if (state.operator === "") {
      numA();
      console.log(`conjuntoA ${state.conjuntoA}`);
    } else {
      numB();
      console.log(`conjuntoB ${state.conjuntoB}`);
    }
  } else if (state.numero === "←") {
    erase();
  } else {
    state.operator = state.numero;
    console.log(`operator ${state.operator}`);
  }

  function numA() {
    state.conjuntoA += state.numero;
    resultado.innerText = state.conjuntoA;
  }

  function numB() {
    state.conjuntoB += state.numero;
    resultado.innerText = state.conjuntoB;
  }

  function C() {
    resultado.innerText = "0";
    state.conjuntoA = "";
    state.conjuntoB = "";
    state.operator = "";
  }

  function erase() {
    if (state.operator === "") {
      state.conjuntoA = state.conjuntoA.slice(0, -1);
      resultado.innerText = state.conjuntoA;
      console.log(`Erase conjuntoA ${state.conjuntoA}`);
    } else {
      state.conjuntoB = state.conjuntoB.slice(0, -1);
      resultado.innerText = state.conjuntoB;
      console.log(`Erase conjuntoB ${state.conjuntoB}`);
    }
  }

  function operation() {
    switch (true) {
      case state.operator === "+":
        suma = parseInt(state.conjuntoA) + parseInt(state.conjuntoB);
        resultado.innerText = suma;
        state.conjuntoA = "";
        state.conjuntoB = "";
        state.operator = "";
        console.log(`suma ${suma}`);
        break;
      case state.operator === "-":
        resta = state.conjuntoA - state.conjuntoB;
        resultado.innerText = resta;
        state.conjuntoA = "";
        state.conjuntoB = "";
        state.operator = "";
        console.log(`resta ${resta}`);
        break;
      case state.operator === "÷":
        division = state.conjuntoA / state.conjuntoB;
        resultado.innerText = division;
        state.conjuntoA = "";
        state.conjuntoB = "";
        state.operator = "";
        console.log(`division ${division}`);
        break;
      case state.operator === "x":
        mult = state.conjuntoA * state.conjuntoB;
        resultado.innerText = mult;
        state.conjuntoA = "";
        state.conjuntoB = "";
        state.operator = "";
        console.log(`mult ${mult}`);
        break;
      default:
        resultado.innerText = 0;
    }
  }
}
