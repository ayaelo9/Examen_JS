function calcularFibonacci() {
    // 1. Obtener el número del usuario
    const n = parseInt(document.getElementById('inputUser').value);
    
    // Validación básica
    if (isNaN(n) || n <= 0) {
        alert("Por favor, introduce un número válido mayor a 0");
        return;
    }

    // 2. Tip del ejercicio: Guardar en un array
    let secuencia = [];

    // 3. Lógica matemática de la sucesión[cite: 1]
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            secuencia.push(0); // El primero siempre es 0[cite: 1]
        } else if (i === 1) {
            secuencia.push(1); // El segundo siempre es 1[cite: 1]
        } else {
            // Sumamos los dos anteriores del array: (i-1) + (i-2)[cite: 1]
            let nuevoNumero = secuencia[i - 1] + secuencia[i - 2];
            secuencia.push(nuevoNumero);
        }
    }

    // 4. Mostrar el resultado final unido por comas[cite: 1]
    const contenedor = document.getElementById('resultadoContenedor');
    const texto = document.getElementById('textoFibonacci');
    
    texto.innerText = secuencia.join(", "); // Esto genera el formato 0, 1, 1...[cite: 1]
    contenedor.classList.remove('hidden');
}