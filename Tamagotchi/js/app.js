// Objeto con los valores iniciales exactos de la guía
const patoso = {
    nombre: "Patoso",
    felicidad: 10,
    salud: 8,
    limpieza: 9,
    energia: 5
};

// Función para mantener los estados en el rango de 0 a 10
const limitar = (n) => Math.min(Math.max(n, 0), 10);

function update() {
    // 1. Actualizar Barras y Textos (convertido a escala 0-10 para los textos)
    const stats = ['salud', 'felicidad', 'energia', 'limpieza'];
    
    stats.forEach(stat => {
        // Actualiza el ancho de la barra (ej: 8 -> 80%)
        document.getElementById(`bar-${stat}`).style.width = (patoso[stat] * 10) + '%';
        // Actualiza el texto descriptivo
        document.getElementById(`txt-${stat}`).innerText = patoso[stat] + '/10';
    });

    // 2. Efectos visuales de estado según salud y energía
    const bubble = document.getElementById('thought-bubble');
    const body = document.getElementById('color-body');
    const head = document.getElementById('color-head');

    if (patoso.salud < 4) {
        body.classList.replace('fill-yellow-400', 'fill-slate-500');
        head.classList.replace('fill-yellow-400', 'fill-slate-500');
        bubble.innerText = "🤢";
    } else if (patoso.energia < 3) {
        bubble.innerText = "😴";
    } else {
        // Restaurar color original si está sano
        if (body.classList.contains('fill-slate-500')) {
            body.classList.replace('fill-slate-500', 'fill-yellow-400');
            head.classList.replace('fill-slate-500', 'fill-yellow-400');
        }
        bubble.innerText = "😊";
    }
}

function showMessage(text) {
    const box = document.getElementById('terminal');
    const bubble = document.getElementById('thought-bubble');
    
    box.innerText = `> ${text.toUpperCase()}`;
    bubble.classList.remove('opacity-0', 'scale-0');
    
    setTimeout(() => {
        bubble.classList.add('opacity-0', 'scale-0');
    }, 1500);
}

function accion(tipo) {
    switch(tipo) {
        case 'duchar': 
            // Limpieza al máximo según ejercicio
            patoso.limpieza = 10;
            showMessage("¡Ducha completada!"); 
            break;

        case 'alimentar': 
            // Lógica: salud += 5, felicidad += 2, limpieza += 10, energia += 3
            patoso.salud = limitar(patoso.salud + 5);
            patoso.felicidad = limitar(patoso.felicidad + 2);
            patoso.limpieza = limitar(patoso.limpieza + 10);
            patoso.energia = limitar(patoso.energia + 3);
            showMessage("¡Qué rico! Salud y Energía arriba"); 
            break;

        case 'jugar': 
            // Lógica: felicidad += 3, energia -= 2
            if (patoso.energia > 1) {
                patoso.felicidad = limitar(patoso.felicidad + 3);
                patoso.energia = limitar(patoso.energia - 2);
                showMessage("¡Hora de jugar! Cuac cuac");
            } else {
                showMessage("Demasiado cansado para jugar...");
            }
            break;

        case 'dormir': 
            // Lógica: salud += 1, felicidad += 2, limpieza -= 5, energia += 3
            patoso.salud = limitar(patoso.salud + 1);
            patoso.felicidad = limitar(patoso.felicidad + 2);
            patoso.limpieza = limitar(patoso.limpieza - 5);
            patoso.energia = limitar(patoso.energia + 3);
            showMessage("Zzz... Recargando pilas"); 
            break;

        case 'acariciar': 
            patoso.felicidad = limitar(patoso.felicidad + 2);
            showMessage("¡Le encantan los mimos!"); 
            break;

        case 'reprender': 
            patoso.felicidad = limitar(patoso.felicidad - 4);
            showMessage("Patoso está triste..."); 
            break;
    }
    update();
}

// Animación de respiración suave
setInterval(() => {
    const container = document.getElementById('pet-container');
    container.classList.toggle('scale-105');
}, 1000);

// Ejecutar actualización inicial al cargar
update();