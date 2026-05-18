document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btnVerificar');
    const input = document.getElementById('inputFrase');
    const contenedor = document.getElementById('resultadoContenedor');
    const display = document.getElementById('textoResultado');

    boton.addEventListener('click', () => {

        const original = input.value;

        if (original.trim() === "") {
            alert("Por favor, ingresa una frase.");
            return;
        }

        let limpia = original
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "");

        let invertida = "";

        for (let i = limpia.length - 1; i >= 0; i--) {
            invertida += limpia[i];
        }

        if (limpia === invertida) {
            display.textContent = "¡Es un palíndromo! ✨";
            display.className = "text-2xl font-bold mt-4 text-emerald-400";
        } else {
            display.textContent = "No es un palíndromo ❌";
            display.className = "text-2xl font-bold mt-4 text-rose-400";
        }

        contenedor.classList.remove('hidden');
    });

});
