document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btnProcesar');
    const input = document.getElementById('inputNumeros');
    const contenedor = document.getElementById('resultadoContenedor');

    const displayPares = document.getElementById('sumaPares');
    const displayImpares = document.getElementById('sumaImpares');

    boton.addEventListener('click', () => {

        const texto = input.value.trim();

        if (texto === "") {
            alert("Por favor, ingresa algunos números.");
            return;
        }

        const elementos = texto.split(',');

        let sumaPares = 0;
        let sumaImpares = 0;

        for (let i = 0; i < elementos.length; i++) {

            let num = parseInt(elementos[i].trim());

            if (!isNaN(num)) {

                if (num % 2 === 0) {
                    sumaPares += num;
                } else {
                    sumaImpares += num;
                }
            }
        }

        displayPares.textContent = sumaPares;
        displayImpares.textContent = sumaImpares;

        contenedor.classList.remove('hidden');
    });

});
