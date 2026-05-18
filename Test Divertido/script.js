function calcular() {
    // 1. OBTENER VALORES (Mantenemos tu lógica de captura)
    const Florida = document.getElementById('Florida-value').value;
    const Roma = document.getElementById('Roma-value').value;
    const London = document.getElementById('London-value').value;
    const Marrakech = document.getElementById('Marrakech-value').value;
    const Dubai = document.getElementById('Dubai-value').value;

    const Paella = document.getElementById('Paella-value').value;
    const Hamburguesa = document.getElementById('Hamburguesa-value').value;
    const Espaguetis = document.getElementById('Espaguetis-value').value;
    const cafe = document.getElementById('cafe-value').value;
    const CremaCatalana = document.getElementById('Crema-Catalana-value').value;

    const Lluvia = document.getElementById('Lluvia-value').value;
    const Sol = document.getElementById('Sol-value').value;
    const Aire = document.getElementById('Aire-value').value;
    const Fuego = document.getElementById('Fuego-value').value;
    const Bosque = document.getElementById('Bosque-value').value;

    // VALIDACIÓN
    if ( (!Florida || !Paella || !Lluvia || !CremaCatalana) ||  (!Hamburguesa || !Espaguetis || !cafe || !Sol || !Aire || !Fuego || !Bosque) || (!Roma || !London || !Marrakech || !Dubai) ) {
        alert("¡Por favor, rellena todos los campos!");
        return;
    }

    document.querySelector('label[for="Florida-value"]').innerText = "Tu Carrera:";
    document.querySelector('label[for="Roma-value"]').innerText = "El Orgullo:";
    document.querySelector('label[for="London-value"]').innerText = "El Amor:";
    document.querySelector('label[for="Marrakech-value"]').innerText = "La familia:";
    document.querySelector('label[for="Dubai-value"]').innerText = "El Dinero:";

    document.querySelector('label[for="Paella-value"]').innerText = "Yo Soy...";
    document.querySelector('label[for="Hamburguesa-value"]').innerText = "Mi Pareja:";
    document.querySelector('label[for="Espaguetis-value"]').innerText = "Lo que más odio:";
    document.querySelector('label[for="cafe-value"]').innerText = "El sexo es:";
    document.querySelector('label[for="Crema-Catalana-value"]').innerText = "La vida es:";

    document.querySelector('label[for="Lluvia-value"]').innerText = "Nunca olvidarás a:";
    document.querySelector('label[for="Sol-value"]').innerText = "Tu mejor amigo/a:";
    document.querySelector('label[for="Aire-value"]').innerText = "Tu Alma Gemela:";
    document.querySelector('label[for="Fuego-value"]').innerText = "Amas de verdad a:";
    document.querySelector('label[for="Bosque-value"]').innerText = "Estará en tu memoria:";

    document.querySelector('button').style.display = 'none'; 
    
}