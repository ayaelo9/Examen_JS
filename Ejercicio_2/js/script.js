function calcularPromedio() {
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, rellena las tres notas con números válidos.");
        return;
    }

    let promedio = (n1 + n2 + n3) / 3;

    let textoPromedio = document.getElementById('promedio-texto');
    let contenedor = document.getElementById('contenedor-resultado');
    let mensaje = document.getElementById('mensaje-estado');

    textoPromedio.innerText = promedio.toFixed(2);
    
    contenedor.classList.remove('opacity-0');
    contenedor.classList.add('opacity-100');

    if (promedio >= 5) {
        mensaje.innerText = "🎉 ¡Felicidades! Has aprobado.";
        mensaje.classList.remove('text-red-700');
        mensaje.classList.add('text-sky-800');
    } else {
        mensaje.innerText = "😢 Necesitas mejorar. ¡Ánimo!";
        mensaje.classList.remove('text-sky-800');
        mensaje.classList.add('text-red-700');
    }
}