// Dataset inicial
const usuarios = [
    { id: 1, nombre: 'Pepito', rol: 'Admin', activo: true },
    { id: 2, nombre: 'Ana', rol: 'Editor', activo: true },
    { id: 3, nombre: 'Carlos', rol: 'User', activo: false },
    { id: 4, nombre: 'Pepito', rol: 'User', activo: false },
    { id: 5, nombre: 'Lucía', rol: 'Admin', activo: true }
];

const tableBody = document.getElementById('userTable');
const resultBox = document.getElementById('resultBox');
const resultContent = document.getElementById('resultContent');

// Renderizar tabla
function renderTable(data = usuarios, highlightId = null) {
    tableBody.innerHTML = data.map(u => `
        <tr class="border-t border-slate-800 hover:bg-white/5 transition-colors ${u.id === highlightId ? 'card-grad' : ''}">
            <td class="p-4 text-slate-500">#0${u.id}</td>
            <td class="p-4 font-medium text-white">${u.nombre}</td>
            <td class="p-4"><span class="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">${u.rol}</span></td>
            <td class="p-4">
                <span class="h-2 w-2 rounded-full inline-block ${u.activo ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-rose-500'} mr-2"></span>
                ${u.activo ? 'Activo' : 'Inactivo'}
            </td>
        </tr>
    `).join('');
}

function mostrarResultado(msg, type = 'info') {
    resultBox.classList.remove('hidden');
    resultContent.innerHTML = msg;
}

// --- LÓGICA DE MÉTODOS ---

function ejecutarFind() {
    const query = document.getElementById('searchInput').value;
    const encontrado = usuarios.find(u => u.nombre.toLowerCase() === query.toLowerCase());
    
    if (encontrado) {
        renderTable(usuarios, encontrado.id);
        mostrarResultado(`Objeto encontrado:<br>{ id: ${encontrado.id}, nombre: "${encontrado.nombre}" }`);
    } else {
        renderTable();
        mostrarResultado('undefined: No se encontró ningún usuario.');
    }
}

function ejecutarFilter() {
    const query = document.getElementById('searchInput').value;
    const filtrados = usuarios.filter(u => u.nombre.toLowerCase().includes(query.toLowerCase()));
    
    renderTable(filtrados);
    mostrarResultado(`Array generado: ${filtrados.length} elementos encontrados.`);
}

function ejecutarFindIndex() {
    const query = document.getElementById('searchInput').value;
    const indice = usuarios.findIndex(u => u.nombre.toLowerCase() === query.toLowerCase());
    
    if (indice !== -1) {
        renderTable(usuarios, usuarios[indice].id);
        mostrarResultado(`Índice encontrado: ${indice}<br><span class="text-xs opacity-50">(Posición real en memoria)</span>`);
    } else {
        renderTable();
        mostrarResultado(`Resultado: -1 (No existe en el array)`);
    }
}

// Inicializar
renderTable();