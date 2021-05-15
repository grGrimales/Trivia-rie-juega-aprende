let inputEnviar = document.querySelector("#enviar");
let nombreJugador = document.querySelector("#name");
let valorNombre = document.querySelector("#name-to-replace");

let sections = document.querySelectorAll("section");
let preguntasA = document.querySelectorAll(".questions-a");
let preguntasB = document.querySelectorAll(".questions-b");

let conteoPreguntasCorrectasAnimales = 0;
let conteoPreguntasCorrectasAmbiente = 0;

let bienvenida = document.querySelector("#bienvenida");
let animal = document.querySelector("#animal");
let ambiente = document.querySelector("#ambiente");

let animal2 = document.querySelector("#animal2");
let ambiente2 = document.querySelector("#ambiente2");

let pregsuno = document.querySelectorAll(".btn-pregunta-uno");
let pregsdos = document.querySelectorAll(".btn-pregunta-dos");

inputEnviar.addEventListener("click", iniciarJuego);

function iniciarJuego() {

  if(nombreJugador.value !== '') {

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }

  bienvenida.classList.add("active");
  valorNombre.innerHTML = nombreJugador.value; 
  } else {
    alert('Debes ingresar tu nombre para empezar a jugar');
  }
  
}

//Seleccionar categoría

animal.addEventListener("click", mostrarAnimal);
ambiente.addEventListener("click", mostrarAmbiente);

//Selecionar categoría en la pantalla de resultado
animal2.addEventListener("click", mostrarAnimal);
ambiente2.addEventListener("click", mostrarAmbiente);

function mostrarAnimal() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.querySelector("#seccion-preguntas-animal").classList.add("active");
  document.querySelector("#questions-a-1").classList.add("active");
}

function mostrarAmbiente() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.querySelector("#seccion-preguntas-ambiente").classList.add("active");
  document.querySelector("#questions-b-1").classList.add("active");

}


//Cuando el usuario hace click en las opciones
for (let i = 0; i < pregsuno.length; i++) {
  pregsuno[i].addEventListener("click", evalPregunta);
}

for (let i = 0; i < pregsdos.length; i++) {
  pregsdos[i].addEventListener("click", evalPregunta2);
}

function evalPregunta() {
  for (let i = 0; i < pregsuno.length; i++) {
    pregsuno[i].classList.remove("seleccionado");
  }
  let element = event.target.closest(".btn-pregunta-uno");
  let dataUsar = element.dataset.correct;
  let dataCambio = element.dataset.destino;
  element.classList.add("seleccionado");

  window.setTimeout(function () {
    for (let i = 0; i < preguntasA.length; i++) {
      preguntasA[i].classList.remove("active");
    }
    if (dataUsar === "si") {
      conteoPreguntasCorrectasAnimales = conteoPreguntasCorrectasAnimales + 1;
      if(dataCambio !== 'resultados') {
        document.querySelector("#" + dataCambio).classList.add("active");
      } else {
        mostrarResultadosAnimal();
      }
      
    } else {
      conteoPreguntasCorrectasAnimales = conteoPreguntasCorrectasAnimales;
      if(dataCambio !== 'resultados') {
        document.querySelector("#" + dataCambio).classList.add("active");
      } else {
        mostrarResultadosAnimal();
      }
    }
  }, 600);
}

function evalPregunta2() {
  for (let i = 0; i < pregsdos.length; i++) {
    pregsdos[i].classList.remove("seleccionado");
  }
  let element = event.target.closest(".btn-pregunta-dos");
  let dataUsar = element.dataset.correct;
  let dataCambio = element.dataset.destino;
  element.classList.add("seleccionado");
  console.log(dataUsar);

  window.setTimeout(function () {
    for (let i = 0; i < preguntasB.length; i++) {
      preguntasB[i].classList.remove("active");
    }
    if (dataUsar === "si") {
      conteoPreguntasCorrectasAmbiente = conteoPreguntasCorrectasAmbiente + 1;
      if(dataCambio !== 'resultados') {
        document.querySelector("#" + dataCambio).classList.add("active");
      } else {
        mostrarResultadosAmbiente();
      }
      
    } else {
      conteoPreguntasCorrectasAmbiente = conteoPreguntasCorrectasAmbiente;
      if(dataCambio !== 'resultados') {
        document.querySelector("#" + dataCambio).classList.add("active");
      } else {
        mostrarResultadosAmbiente();
      }
    }
  }, 600);
}


function mostrarResultadosAnimal() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.querySelector('#resultados').classList.add('active');

  if(conteoPreguntasCorrectasAnimales === 3) {
    document.querySelector("#mensaje-resultado").innerHTML = 'Lo lograste! Todas tus respuestas son correctas.';
  } else if (conteoPreguntasCorrectasAnimales === 2) {
    document.querySelector("#mensaje-resultado").innerHTML = 'Bien hecho! Tienes dos respuestas correctas.';
  } else {
    document.querySelector("#mensaje-resultado").innerHTML ='Vuelve a intentarlo! Tus respuestas pueden mejorar.';
  }

}

function mostrarResultadosAmbiente() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.querySelector('#resultados').classList.add('active');

  if(conteoPreguntasCorrectasAmbiente === 3) {
    document.querySelector("#mensaje-resultado").innerHTML = 'Lo lograste! Todas tus respuestas son correctas.';
  } else if (conteoPreguntasCorrectasAmbiente === 2) {
    document.querySelector("#mensaje-resultado").innerHTML = 'Bien hecho! Tienes dos respuestas correctas.';
  } else {
    document.querySelector("#mensaje-resultado").innerHTML ='Vuelve a intentarlo! Tus respuestas pueden mejorar.';
  }

}