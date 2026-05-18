document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btnVerificar');
    const input = document.getElementById('inputCapicua');
    const contenedor = document.getElementById('resultadoContenedor');
    const display = document.getElementById('textoResultado');

    boton.addEventListener('click', () => {

        const numero = input.value.trim();

        if (numero === "") {
            alert("Por favor, ingresa un número.");
            return;
        }

        // Invertir número
        let invertido = "";

        for (let i = numero.length - 1; i >= 0; i--) {
            invertido += numero[i];
        }

        // Comprobar capicúa
        if (numero === invertido) {
            display.textContent = "¡Es Capicúa! ✨";
            display.className = "text-3xl font-bold mt-4 text-emerald-400";
        } else {
            display.textContent = "No es Capicúa ❌";
            display.className = "text-3xl font-bold mt-4 text-rose-400";
        }

        contenedor.classList.remove('hidden');
    });

});