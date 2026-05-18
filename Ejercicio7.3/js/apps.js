function factorial(n){

    let resultado = 1;

    for(let i = n; i >= 1; i--){
    resultado *= i;
    }

    return resultado;
}

function calcularFactorial(){

    const input = document.getElementById("numero");
    const resultadoDiv = document.getElementById("resultado");

    let numero = parseInt(input.value);

    // Validación
    if(isNaN(numero)){

    resultadoDiv.classList.remove("hidden");

    resultadoDiv.innerHTML = `
        <div class="animacion bg-red-500/10 border border-red-500/30 rounded-2xl p-5 text-red-300">
        ⚠️ Introduce un número válido.
        </div>
    `;

    return;
    }

    // Convertir negativo a positivo
    const original = numero;

    numero = Math.abs(numero);

    const resultado = factorial(numero);

    resultadoDiv.classList.remove("hidden");

    resultadoDiv.innerHTML = `
    <div class="animacion bg-white/5 border border-white/10 rounded-3xl p-6">

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
            <p class="text-white/50 uppercase tracking-[3px] text-xs">
            Resultado
            </p>

            <h2 class="text-4xl md:text-5xl font-bold text-white mt-2">
            ${resultado}
            </h2>
        </div>

        <div class="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-4">
            <p class="text-cyan-300 text-sm">
            Número usado:
            </p>

            <p class="text-white text-2xl font-semibold mt-1">
            ${numero}
            </p>
        </div>

        </div>

        ${
        original < 0
        ?
        `
        <div class="mt-5 bg-yellow-500/10 border border-yellow-400/20 rounded-2xl p-4 text-yellow-200">
            ⚡ El número negativo (${original}) fue convertido automáticamente a positivo usando <b>Math.abs()</b>.
        </div>
        `
        :
        ""
        }

        <div class="mt-6 border-t border-white/10 pt-5">
        <p class="text-white/60 text-sm">
            Operación realizada:
        </p>

        <p class="text-white text-lg mt-2 break-words">
            ${crearOperacion(numero)}
        </p>
        </div>

    </div>
    `;
}

// Crear operación visual
function crearOperacion(n){

    if(n === 0 || n === 1){
    return `${n} = 1`;
    }

    let texto = "";

    for(let i = n; i >= 1; i--){

    texto += i;

    if(i > 1){
        texto += " × ";
    }
    }

    return `${texto} = ${factorial(n)}`;
}