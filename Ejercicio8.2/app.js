function comprobarDNI(){

    const input = document
        .getElementById("dni")
        .value
        .trim()
        .toUpperCase();

    const resultado = document.getElementById("resultado");

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    // DNI o NIE
    const patron = /^([XYZ]\d{7}|\d{8})[A-Z]$/;

    if(!patron.test(input)){
        mostrarResultado(
            resultado,
            "⚠️ Formato incorrecto",
            "Introduce un DNI (12345678Z) o NIE (X1234567L).",
            "bg-amber-500 text-black"
        );
        return;
    }

    let numero;
    let letraUsuario = input.slice(-1);

    // NIE → conversión
    if(["X","Y","Z"].includes(input[0])){

        const conversion = {
            X:"0",
            Y:"1",
            Z:"2"
        };

        numero = parseInt(
            conversion[input[0]] + input.substring(1,8)
        );

    } else {
        numero = parseInt(input.substring(0,8));
    }

    const resto = numero % 23;
    const letraCorrecta = letras.charAt(resto);

    if(letraUsuario === letraCorrecta){

        mostrarResultado(
            resultado,
            "🛡️ DNI o NIEcorrecto",
            "El documento es válido.",
            "bg-green-500 text-white"
        );

    } else {

        mostrarResultado(
            resultado,
            "❌ DNI o NIEincorrecto",
            "La letra correcta es: " + letraCorrecta,
            "bg-red-500 text-white"
        );

    }

}

function mostrarResultado(elemento, titulo, mensaje, estilo){

    elemento.classList.remove("hidden");

    elemento.className =
    "mt-6 p-5 rounded-2xl text-center font-bold " + estilo;

    elemento.innerHTML =
    "<h2 class='text-lg mb-2'>" + titulo + "</h2>" +
    "<p>" + mensaje + "</p>";

}