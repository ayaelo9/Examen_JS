const numeroSecreto=
Math.floor(Math.random()*500)+1;

const mensaje=
document.getElementById("mensaje");

const body=
document.getElementById("body");

const boton=
document.getElementById("btn");


function adivinar(){

let numero=
parseInt(
document.getElementById("numero").value
);


if(numero<0 || numero>500){

mensaje.innerText=
"Por favor indica un número entre 0 y 500";

return;

}


let distancia=
Math.abs(
numeroSecreto-numero
);


let direccion="";

if(numero>numeroSecreto){

direccion=
"tu número es más grande que el mío";

}else{

direccion=
"tu número es más pequeño que el mío";

}


if(numero===numeroSecreto){

mensaje.innerText=
"🎉 ¡Ganaste!";

body.className=
"min-h-screen flex justify-center items-center bg-green-500";

boton.style.display="none";

}


else if(distancia>=50){

mensaje.innerText=
"❄️ Frío, frío: "+direccion;

body.className=
"min-h-screen flex justify-center items-center bg-blue-500";

}


else if(
distancia>=15 &&
distancia<50
){

mensaje.innerText=
"🌤 Tibio, tibio: "+direccion;

body.className=
"min-h-screen flex justify-center items-center bg-yellow-300";

}


else{

mensaje.innerText=
"🔥 Caliente, caliente: "+direccion;

body.className=
"min-h-screen flex justify-center items-center bg-red-500";

}

}