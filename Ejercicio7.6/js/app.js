
function invertirTexto() {
    const textoOriginal = document.getElementById('inputTexto').value;
    
    if (textoOriginal.trim() === "") {
        alert("Por favor, introduce algún texto para poder invertirlo.");
        return;
    }

    let textoAlReves = "";

   
    for (let i = textoOriginal.length - 1; i >= 0; i--) {
        textoAlReves += textoOriginal[i]; 
    }

    const contenedor = document.getElementById('resultadoContenedor');
    const display = document.getElementById('textoInvertido');
    
    display.innerText = textoAlReves;
    contenedor.classList.remove('hidden');
}