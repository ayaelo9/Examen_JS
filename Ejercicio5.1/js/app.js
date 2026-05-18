const meses = [null, "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function buscarMes() {
    const num = parseInt(document.getElementById('input-mes').value);
    const box = document.getElementById('resultado');
    
    if (num >= 1 && num <= 12) {
        box.innerText = `El mes ${num} se corresponde con ${meses[num]}.`;
        box.classList.remove('hidden');
    } else {
        alert("Por favor, introduce un número entre 1 y 12");
    }
}