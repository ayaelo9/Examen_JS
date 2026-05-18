function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generarAleatorios() {
    const arr = Array.from({length: 7}, () => Math.floor(Math.random() * 30) + 2);
    document.getElementById('arrayInput').value = arr.join(', ');
}

function procesarArray() {
    const input = document.getElementById('arrayInput').value;
    // Limpiar y transformar la entrada a números reales
    const arrayNumeros = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    
    if (arrayNumeros.length === 0) return;

    const arrayVisual = document.getElementById('arrayVisual');
    arrayVisual.innerHTML = '';

    let i = 0;
    let encontrado = false;
    let primerPrimo = null;
    let indicePrimo = -1;

    // Bucle do-while exigido por la práctica
    do {
        if (esPrimo(arrayNumeros[i])) {
            primerPrimo = arrayNumeros[i];
            encontrado = true;
            indicePrimo = i;
        }
        i++;
    } while (!encontrado && i < arrayNumeros.length);

    // Renderizar gráficamente las tarjetas de números evaluados
    arrayNumeros.forEach((num, index) => {
        let badgeClass = "bg-slate-800 text-slate-400 border-slate-700";
        if (encontrado && index === indicePrimo) {
            badgeClass = "bg-emerald-950/80 text-emerald-300 border-emerald-500/50 font-bold scale-105 shadow-md shadow-emerald-950";
        } else if (index < i) {
            badgeClass = "bg-rose-950/30 text-rose-400/70 border-rose-900/30 line-through";
        }

        arrayVisual.innerHTML += `<span class="border px-3 py-1.5 rounded-lg text-xs transition-all ${badgeClass}">${num}</span>`;
    });

    // Mostrar el cuadro de diálogo
    const textoResultado = document.getElementById('textoResultado');
    if (encontrado) {
        textoResultado.className = "text-sm font-medium text-emerald-400 mt-2";
        textoResultado.innerHTML = `🎯 ¡Éxito! El primer primo detectado es el <strong>${primerPrimo}</strong> (Posición ${indicePrimo + 1}).`;
    } else {
        textoResultado.className = "text-sm font-medium text-rose-400 mt-2";
        textoResultado.innerHTML = "❌ Bucle terminado. No se localizó ningún número primo en la secuencia.";
    }

    document.getElementById('resultadoBox').classList.remove('hidden');
}