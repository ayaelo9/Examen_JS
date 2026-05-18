function iniciarBatalla() {
    const input = document.getElementById('eleccionUsuario');
    const usuario = parseInt(input.value);
    const pantalla = document.getElementById('pantallaFinal');
    const texto = document.getElementById('textoResultado');
    
    const opciones = ["", "PIEDRA", "PAPEL", "TIJERA"];

    if (isNaN(usuario) || usuario < 1 || usuario > 3) {
        texto.innerHTML = "<span class='text-red-500 uppercase'>GAME OVER</span><br><br>ENTIENDO QUE NO QUIERES JUGAR. ADIÓS";
        pantalla.classList.remove('hidden');
        return;
    }

    const pc = Math.floor(Math.random() * 3) + 1;
    
    let veredicto = "";

    if (usuario === pc) {
        veredicto = "¡EMPATE!";
    } else if (
        (usuario === 1 && pc === 3) || 
        (usuario === 2 && pc === 1) || 
        (usuario === 3 && pc === 2)
    ) {
        veredicto = "¡HAS GANADO!";
    } else {
        veredicto = "¡HE GANADO!";
    }

    texto.innerHTML = `YO <span class='text-cyan-400'>${opciones[pc]}</span> Y TÚ <span class='text-yellow-400'>${opciones[usuario]}</span>.<br><br><span class='text-2xl font-black'>${veredicto}</span>`;
    pantalla.classList.remove('hidden');
    
    input.value = "";
}

function cerrarPantalla() {
    document.getElementById('pantallaFinal').classList.add('hidden');
}