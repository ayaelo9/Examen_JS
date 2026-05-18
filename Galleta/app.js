const mensajes = [
  "Hoy tendrás una gran sorpresa 🎉",
  "Un cambio positivo llegará pronto ✨",
  "La suerte está de tu lado 🍀",
  "Algo bueno te espera mañana 🌞",
  "Confía en ti, vas por buen camino 🚀",
  "Un nuevo amigo aparecerá pronto 🤝",
  "Una oportunidad llegará muy pronto 💰",
  "Tu esfuerzo dará resultados 🔥"
];

function mostrarMensaje() {

  const num_mensajes = mensajes.length;

  const random = Math.floor(Math.random() * num_mensajes);

  const mensajeAleatorio = mensajes[random];

  document.getElementById("mensaje").innerText = mensajeAleatorio;

  console.log("Mensaje:", mensajeAleatorio);

  // Cambiar imagen a galleta abierta
  document.getElementById("galleta").src =
    "galletas2.png";

  // Desactivar botón
  const boton = document.getElementById("boton-mensaje");
  boton.disabled = true;

  boton.classList.add("opacity-50", "cursor-not-allowed");
}
function reiniciar() {

  // volver a imagen original
  document.getElementById("galleta").src = "galletas1.png";

  // limpiar mensaje
  document.getElementById("mensaje").innerText = "";

  // reactivar botón principal
  const boton = document.getElementById("boton-mensaje");
  boton.disabled = false;

  boton.classList.remove("opacity-50", "cursor-not-allowed");
}