function verificarMultiplo() {
    const dividendo = parseInt(document.getElementById('dividendo').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    const caja = document.getElementById('resultadoCaja');
    const mensaje = document.getElementById('mensajeResultado');

    if (isNaN(dividendo) || isNaN(divisor)) {
        alert("Por favor, introduzca ambos números.");
        return;
    }

    caja.classList.remove('hidden');

    if (divisor < 2 || divisor > 7) {
        caja.className = "mt-8 p-6 rounded-sm border border-red-200 bg-red-50 text-red-800 block text-center";
        mensaje.innerHTML = "<strong>Error de pedido:</strong> El divisor debe ser un número entre 2 y 7.";
    } else {
        if (dividendo % divisor === 0) {
            caja.className = "mt-8 p-6 rounded-sm border border-green-200 bg-green-50 text-green-800 block text-center";
            mensaje.innerHTML = `Confirmado: El número <strong>${dividendo}</strong> es múltiplo de <strong>${divisor}</strong>.`;
        } else {
            caja.className = "mt-8 p-6 rounded-sm border border-stone-200 bg-stone-100 text-stone-600 block text-center";
            mensaje.innerHTML = `Aviso: El número <strong>${dividendo}</strong> NO es múltiplo de <strong>${divisor}</strong>.`;
        }
    }
}