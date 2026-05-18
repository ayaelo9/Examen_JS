function convertir() {
    const letras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

    const input = document.getElementById('numeroInput');
    const num = parseInt(input.value);
    const contenedor = document.getElementById('pantallaResultado');
    const display = document.getElementById('resultadoTexto');

    if (isNaN(num) || num < 0 || num > 10) {
        display.innerText = "⚠️ Número inválido (0-10)";
        display.classList.add('text-red-500');
    } else {
        display.innerText = letras[num].toUpperCase();
        display.classList.remove('text-red-500');
        display.classList.add('text-orange-800');
    }

    contenedor.classList.remove('opacity-0', 'translate-y-4');
}