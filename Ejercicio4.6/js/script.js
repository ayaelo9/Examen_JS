const baseDeDatos = {
    entrecot:    { vegano: false, lactosa: false, gluten: false },
    pollo:       { vegano: false, lactosa: false, gluten: false },
    hamburguesa: { vegano: false, lactosa: true,  gluten: true  },
    espagueti:   { vegano: false, lactosa: true,  gluten: true  },
    lasana:      { vegano: false, lactosa: true,  gluten: true  },
    risotto:     { vegano: false, lactosa: true,  gluten: false },
    ensalada:    { vegano: false, lactosa: true,  gluten: true  },
    crema:       { vegano: true,  lactosa: false, gluten: false },
    wok:         { vegano: true,  lactosa: false, gluten: false }
};

function confirmarPedido() {
    const idPlato = document.getElementById('plato').value;
    const prefiereVegano = document.getElementById('vegano').checked;
    const prefiereSinLactosa = document.getElementById('lactosa').checked;
    const prefiereSinGluten = document.getElementById('gluten').checked;
    
    const platoInfo = baseDeDatos[idPlato];
    const resultadoDiv = document.getElementById('resultado');
    const mensaje = document.getElementById('mensaje');

    let error = false;
    let causa = "";

    // Lógica de validación
    if (prefiereVegano && !platoInfo.vegano) {
        error = true;
        causa = "Este plato contiene productos de origen animal.";
    } else if (prefiereSinLactosa && platoInfo.lactosa) {
        error = true;
        causa = "Este plato contiene lácteos.";
    } else if (prefiereSinGluten && platoInfo.gluten) {
        error = true;
        causa = "Este plato contiene gluten.";
    }

    resultadoDiv.classList.remove('hidden');

    if (error) {
        resultadoDiv.className = "mt-8 text-center p-6 rounded-sm border border-red-200 bg-red-50 text-red-800 block";
        mensaje.innerHTML = `<strong>Usted no puede comer este plato.</strong><br><small>${causa}</small>`;
    } else {
        resultadoDiv.className = "mt-8 text-center p-6 rounded-sm border border-green-200 bg-green-50 text-green-800 block";
        mensaje.innerHTML = "<strong>Perfecto, pedido correcto.</strong><br><small>Enseguida lo prepararemos para usted.</small>";
    }
}