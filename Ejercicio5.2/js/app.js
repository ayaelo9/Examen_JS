// Array inicial solicitado
let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

/**
 * Genera el HTML para las tarjetas de clasificación
 */
function generarHTML(lista, esActual = false) {
    return lista.map((nombre, i) => `
        <div class="flex items-center justify-between ${esActual ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-slate-800/40 border-white/5'} p-3 rounded-xl border animate-in fade-in slide-in-from-bottom-1">
            <div class="flex items-center gap-3">
                <span class="w-5 h-5 flex items-center justify-center ${esActual ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'} rounded-full text-[9px] font-bold">
                    ${i + 1}
                </span>
                <span class="font-semibold text-xs ${esActual ? 'text-white' : 'text-slate-400'}">${nombre}</span>
            </div>
           
        </div>
    `).join('');
}

/**
 * Muestra la lista original nada más cargar
 */
function init() {
    document.getElementById('lista-original').innerHTML = generarHTML(clasificaciones);
}

/**
 * Aplica los métodos de array y actualiza la segunda columna
 */
function ejecutarConcurso() {
    const idxCelia = clasificaciones.indexOf("Celia");
    const idxRaul = clasificaciones.indexOf("Raúl");
    [clasificaciones[idxCelia], clasificaciones[idxRaul]] = [clasificaciones[idxRaul], clasificaciones[idxCelia]];

    const idxAntonio = clasificaciones.indexOf("Antonio");
    if (idxAntonio !== -1) clasificaciones.splice(idxAntonio, 1);

    const idxAna = clasificaciones.indexOf("Ana");
    clasificaciones.splice(idxAna + 1, 0, "Roberto", "Amaya");

    clasificaciones.unshift("Marta");

    document.getElementById('ranking-actual').innerHTML = generarHTML(clasificaciones, true);
    
    const btn = document.getElementById('btn-concursar');
    btn.disabled = true;
    btn.classList.add('opacity-30', 'cursor-not-allowed');
    btn.innerText = "PROCESO FINALIZADO";
}

init();