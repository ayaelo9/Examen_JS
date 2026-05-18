function Calcular() {
  console.log("El botón ha sido pulsado"); // Esto aparecerá en la consola del navegador (F12)

  // Capturamos los elementos del DOM
  const internetInput = document.getElementById('internet');
  const luzInput = document.getElementById('luz');
  const aguaInput = document.getElementById('agua');
  const gasInput = document.getElementById('gas');
  const alquilerInput = document.getElementById('alquiler');
  const nombreInput = document.getElementById('nombre');
  const resultadoDiv = document.getElementById('totalGastos');

  // Convertimos a número (si la casilla está vacía, usamos 0)
  const internet = parseFloat(internetInput.value) || 0;
  const luz = parseFloat(luzInput.value) || 0;
  const agua = parseFloat(aguaInput.value) || 0;
  const gas = parseFloat(gasInput.value) || 0;
  const alquiler = parseFloat(alquilerInput.value) || 0;

  const total = internet + luz + agua + gas + alquiler;
  const nombre = nombreInput.value.trim();

  // Cambiamos el texto del div
  if (nombre !== "") {
    resultadoDiv.innerHTML = `Hola **${nombre}**, el total de gastos es: **${total}€**`;
  } else {
    resultadoDiv.innerHTML = `El total de gastos es: ${total} Euros`;
  }
}