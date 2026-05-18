document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btnGenerar');
    const input = document.getElementById('inputNumero');
    const contenedor = document.getElementById('resultadoContenedor');
    const display = document.getElementById('textoResultado');

    boton.addEventListener('click', () => {

        const numero = Number(input.value);

        // Validación
        if (!Number.isInteger(numero) || numero < 0) {
            alert("Introduce un número válido (0 o mayor).");
            return;
        }

        let secuencia = [];

        // Cuenta regresiva
        for (let i = numero; i >= 0; i--) {
            secuencia.push(i);
        }

        // Mostrar resultado
        display.textContent = secuencia.join(".");
        contenedor.classList.remove('hidden');
    });

});
