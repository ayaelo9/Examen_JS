function comparar() {
    const n1 = parseInt(document.getElementById('num1').value);
    const n2 = parseInt(document.getElementById('num2').value);
    const res = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
        res.innerText = "Por favor, escribe ambos números.";
        return;
    }

    if (n1 > n2) {
        res.innerHTML = `El <span class="text-cyan-400 font-bold">${n1}</span> es el mayor.`;
    } else if (n2 > n1) {
        res.innerHTML = `El <span class="text-cyan-400 font-bold">${n2}</span> es el mayor.`;
    } else {
        res.innerText = "¡Ambos números son iguales!";
    }
}