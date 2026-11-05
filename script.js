const formulario = document.querySelector(".formulario-contacto");
const estado = document.querySelector("#estado-formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  estado.textContent = "Formulario de demostración. No se envió ningún mensaje.";
});

