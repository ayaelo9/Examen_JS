function mostrarNumeros() {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let delay = 0;

    for(let i = 100; i >= 0; i -= 2){

    resultado.innerHTML += `
        <div 
        class="number-card rounded-2xl bg-white/5 border border-white/10 p-5 text-center shadow-lg"
        style="animation-delay:${delay}s"
        >
        <p class="text-3xl font-bold text-white">${i}</p>
        <p class="text-xs text-white/50 mt-1">Número par</p>
        </div>
    `;

    delay += 0.03;
    }
}

function limpiar(){
    document.getElementById("resultado").innerHTML = "";
}
