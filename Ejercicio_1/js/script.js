// PASO 01: Mapear los objetos del HTML
const NUM_A = document.getElementById("numeroa");
const NUM_B = document.getElementById("numerob");

// Párrafos para resultados
const SUMA = document.getElementById("suma");
const RESTA = document.getElementById("resta");
const MULT = document.getElementById("multiplicacion");
const DIVI = document.getElementById("division");

function calcular() {
    // Obtenemos los valores y los convertimos a números enteros
    let valA = parseInt(NUM_A.value);
    let valB = parseInt(NUM_B.value);

    // Realizamos las operaciones
    let res_suma = valA + valB;
    let res_resta = valA - valB;
    let res_mult = valA * valB;
    let res_divi = valA / valB;

    // Mostramos los resultados en el HTML usando innerHTML
    SUMA.innerHTML = `La suma de ${valA} + ${valB} es ${res_suma}`;
    RESTA.innerHTML = `La resta de ${valA} - ${valB} es ${res_resta}`;
    MULT.innerHTML = `La multiplicación de ${valA} * ${valB} es ${res_mult}`;
    DIVI.innerHTML = `La división de ${valA} / ${valB} es ${res_divi}`;
}