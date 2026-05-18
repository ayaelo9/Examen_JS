const meses = [
  { numeroMes: 1, mesLetra: 'enero', numeroDias: 31 },
  { numeroMes: 2, mesLetra: 'febrero', numeroDias: 28 },
  { numeroMes: 3, mesLetra: 'marzo', numeroDias: 31 },
  { numeroMes: 4, mesLetra: 'abril', numeroDias: 30 },
  { numeroMes: 5, mesLetra: 'mayo', numeroDias: 31 },
  { numeroMes: 6, mesLetra: 'junio', numeroDias: 30 },
  { numeroMes: 7, mesLetra: 'julio', numeroDias: 31 },
  { numeroMes: 8, mesLetra: 'agosto', numeroDias: 31 },
  { numeroMes: 9, mesLetra: 'septiembre', numeroDias: 30 },
  { numeroMes: 10, mesLetra: 'octubre', numeroDias: 31 },
  { numeroMes: 11, mesLetra: 'noviembre', numeroDias: 30 },
  { numeroMes: 12, mesLetra: 'diciembre', numeroDias: 31 }
];

function buscarMes() {
  const mesNumero = parseInt(document.getElementById('mesInput').value);
  const resultado = document.getElementById('resultado');

  const indice = meses.findIndex(m => m.numeroMes === mesNumero);

  if (indice !== -1) {
    const mes = meses[indice];
    resultado.innerHTML = `El mes <span class='text-indigo-300 font-bold'>${mes.numeroMes}</span> es <span class='text-green-300 font-bold'>${mes.mesLetra}</span> y tiene <span class='text-yellow-300 font-bold'>${mes.numeroDias}</span> días.`;
  } else {
    resultado.innerHTML = `<span class='text-red-400'>Mes no válido</span>`;
  }
}