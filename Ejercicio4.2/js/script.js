function calcularNivel() {
    const nombre = document.getElementById('nombre').value;
    const anios = parseInt(document.getElementById('anios').value);
    const ficha = document.getElementById('ficha');
    
    let nivel = "";

    if (!nombre || isNaN(anios)) return;

    if (anios < 2) nivel = "Nivel Principiante 🌱";
    else if (anios <= 4) nivel = "Nivel Intermedio 🌿";
    else if (anios <= 7) nivel = "Nivel Avanzado 🌳";
    else if (anios <= 10) nivel = "Nivel Experto 💎";
    else nivel = "Nivel Gurú 🔥";

    document.getElementById('resNombre').innerText = `Empleado: ${nombre}`;
    document.getElementById('resNivel').innerText = nivel;
    ficha.classList.remove('hidden');
}