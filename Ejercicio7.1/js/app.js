function calcularSuma() {

    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);

    const resultado = document.getElementById("resultado");
    const operacion = document.getElementById("operacion");
    const total = document.getElementById("total");
    const error = document.getElementById("error");

    resultado.classList.add("hidden");
    error.classList.add("hidden");

    if (isNaN(n1) || isNaN(n2)) {
    error.textContent = "⚠️ Debes introducir dos números válidos.";
    error.classList.remove("hidden");
    return;
    }

    let inicio = Math.min(n1, n2);
    let fin = Math.max(n1, n2);

    let suma = 0;
    let numeros = [];

    for (let i = inicio; i <= fin; i++) {
    suma += i;
    numeros.push(i);
    }

    operacion.textContent = numeros.join(" + ");
    total.textContent = suma;

    resultado.classList.remove("hidden");
}