function calcularDobleTriple() {
    let num = parseInt(document.getElementById('numero').value);

    if (isNaN(num)) {
        alert("Por favor, escribe un número.");
        return;
    }

    let doble = num * 2;
    let triple = num * 3;

    document.getElementById('res-doble').innerText = doble;
    document.getElementById('res-triple').innerText = triple;
}