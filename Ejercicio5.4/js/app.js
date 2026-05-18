let listadoTareas = [];

function añadirTarea(){

const input = document.getElementById("tarea-input");

const texto = input.value.trim();

if(texto !== ""){

  listadoTareas.push(texto);

  input.value = "";

  mostrarTareas();
}
}

function mostrarTareas(){

const lista = document.getElementById("lista-tareas");

const contador = document.getElementById("contador");

contador.innerText = listadoTareas.length;

if(listadoTareas.length === 0){

  lista.innerHTML = `
    <div class="text-center py-20 text-slate-500 text-lg">
      No hay tareas todavía
    </div>
  `;

  return;
}

lista.innerHTML = "";

listadoTareas.forEach((tarea,index)=>{

  lista.innerHTML += `

    <div class="bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl p-5 flex items-center gap-5">

      <div class="w-12 h-12 rounded-xl bg-cyan-400 text-slate-900 flex items-center justify-center font-black">
        ${index + 1}
      </div>

      <div>

        <p class="text-white text-lg font-semibold break-words">
          ${tarea}
        </p>

        <p class="text-slate-500 text-sm mt-1">
          Tarea pendiente
        </p>

      </div>

    </div>

  `;
});

lista.scrollTop = lista.scrollHeight;
}

function eliminarTarea(){

const inputEliminar = document.getElementById("input-eliminar");

const numero = parseInt(inputEliminar.value);

const indice = numero - 1;

if(indice >= 0 && indice < listadoTareas.length){

  listadoTareas.splice(indice,1);

  inputEliminar.value = "";

  mostrarTareas();

}else{

  alert("Número inválido");
}
}

function salirAplicacion(){

document.getElementById("mensaje-final")
.classList.remove("hidden");

document.getElementById("lista-tareas")
.style.display = "none";

const botones = document.querySelectorAll("button");

botones.forEach(btn => {

  btn.disabled = true;

  btn.classList.add("opacity-40","cursor-not-allowed");
});

document.getElementById("tarea-input").disabled = true;

document.getElementById("input-eliminar").disabled = true;
}

document
.getElementById("tarea-input")
.addEventListener("keypress",(e)=>{

  if(e.key === "Enter"){

    añadirTarea();
  }
});
