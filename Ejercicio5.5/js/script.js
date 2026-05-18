function explorarSistemas() {
    const planetas = [
        "Mercurio", "Venus", "Tierra", "Marte", 
        "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón"
    ];

    const contenedor = document.getElementById('contenedor-planetas');
    const log = document.getElementById('log-consola');
    
    contenedor.innerHTML = '';
    
    for (const planeta of planetas) {
        const card = document.createElement('div');
        card.className = "planet-card p-6 rounded-2xl text-center animate-in fade-in zoom-in duration-300";
        card.innerHTML = `
            <span class="block text-4xl mb-3">${obtenerEmoji(planeta)}</span>
            <span class="text-gray-800 text-xs font-bold uppercase tracking-widest">${planeta}</span>
        `;
        contenedor.appendChild(card);
    }

    log.innerText = "Estado: Exploración Completa";
    console.log("Planetas cargados:", planetas);
}

function obtenerEmoji(p) {
    const iconos = {
        "Mercurio": "🌑", "Venus": "🌕", "Tierra": "🌍", "Marte": "🔴",
        "Júpiter": "🟠", "Saturno": "🪐", "Urano": "💎", "Neptuno": "🔵", "Plutón": "❄️"
    };
    return iconos[p] || "🚀";
}