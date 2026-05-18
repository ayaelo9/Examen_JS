function verificarPalabra() {
    // Obtenemos el valor y quitamos espacios vacíos
    const palabra = document.getElementById('palabraInput').value.trim();
    const box = document.getElementById('resultadoBox');
    const texto = document.getElementById('mensajeTexto');

    if (palabra === "") return;

    // Lógica basada en el ejercicio
    const largo = palabra.length;
    const inicial = palabra.charAt(0).toUpperCase();

    // Condición: (9 letras Y empieza por H) O (5 letras Y empieza por P)
    const esBonita = (largo === 9 && inicial === 'H') || (largo === 5 && inicial === 'P');

    box.classList.remove('hidden');

    if (esBonita) {
        texto.className = "text-center p-5 rounded-2xl font-medium leading-relaxed border border-cyan-500/30 bg-cyan-500/10 text-cyan-400";
        texto.innerHTML = `La palabra <strong>"${palabra}"</strong> cumple el patrón: <br> ¡Es una palabra bonita! ✨`;
    } else {
        texto.className = "text-center p-5 rounded-2xl font-medium leading-relaxed border border-slate-600 bg-slate-800 text-slate-400";
        texto.innerHTML = `La palabra <strong>"${palabra}"</strong> no cumple el patrón lingüístico.`;
    }
}