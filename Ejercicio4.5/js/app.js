function calcular() {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('operador').value;
    const display = document.getElementById('resultadoDisplay');
    const ticket = document.getElementById('ticket');

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduzca los importes para calcular.");
        return;
    }

    let res = 0;

    switch(op) {
        case "suma": res = num1 + num2; break;
        case "resta": res = num1 - num2; break;
        case "multi": res = num1 * num2; break;
        case "divi": 
            if(num2 === 0) {
                alert("No es posible dividir la cuenta por cero comensales.");
                return;
            }
            res = num1 / num2; 
            break;
    }

    display.innerText = res.toLocaleString('es-ES', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 2 
    });
    
    ticket.classList.remove('hidden');
}