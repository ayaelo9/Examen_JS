function calcularLitros() {
    // Constante obligatoria según el ejercicio
    const COBERTURA = 12; 

    let alto = parseFloat(document.getElementById('alto').value);
    let ancho = parseFloat(document.getElementById('ancho').value);
    let manos = parseInt(document.getElementById('manos').value);

    if (isNaN(alto) || isNaN(ancho) || isNaN(manos)) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let area = alto * ancho;
    let litrosNecesarios = (area * manos) / COBERTURA;

    // Mostrar resultado con 2 decimales
    document.getElementById('litros').innerText = litrosNecesarios.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');
}