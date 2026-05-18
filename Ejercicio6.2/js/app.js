let carrito = [];

function agregarProducto() {
  const nombre = document.getElementById("producto").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(precio)) return;

  carrito.push({ producto: nombre, precio: precio });

  document.getElementById("producto").value = "";
  document.getElementById("precio").value = "";

  render();
  calcularTotal();
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    lista.innerHTML += `
      <div class="flex justify-between items-center bg-white/10 p-3 rounded-xl border border-white/10">
        <span>${index+1}. ${item.producto}</span>
        <span class="text-indigo-300 font-semibold">€${item.precio.toFixed(2)}</span>
      </div>
    `;
  });
}

function calcularTotal() {
  let total = 0;

  for (const item of carrito) {
    total += item.precio;
  }

  document.getElementById("total").textContent = `€${total.toFixed(2)}`;
}