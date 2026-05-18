let carrito = [];

/**
 * Función para agregar productos a la lista
 */
function agregarProducto() {
    const input = document.getElementById('producto-input');
    const nombreProducto = input.value.trim();

    if (nombreProducto === "") {
        alert("Por favor, escribe el nombre de un producto.");
        return;
    }

    carrito.push(nombreProducto);

    input.value = "";
    input.focus();

    renderizarCarrito();
}

/**
 * Función para actualizar la vista de la lista y el contador
 */
function renderizarCarrito() {
    const listaUL = document.getElementById('lista-productos');
    const contadorSpan = document.getElementById('contador');

    listaUL.innerHTML = "";

    carrito.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = "hover:text-blue-600 transition-colors cursor-default border-b border-gray-50 pb-1";
        listaUL.appendChild(li);
    });

    contadorSpan.innerText = carrito.length;
}

document.getElementById('producto-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarProducto();
    }
});