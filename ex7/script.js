let btCalculo = document.getElementById("btCalculo");
let date_ini = document.getElementById("date_ini");
let date_end = document.getElementById("date_end");
let h3Result = document.getElementById("h3Result")

const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;

function contdorDeDias() {
  let date_ini1 = new Date(date_ini.value);
  let date_end1 = new Date(date_end.value);

  // Calcula a diferença entre os carimbos de data/hora
  let calculoDias = date_end1.getTime() - date_ini1.getTime();

  // Converte a diferença para dias
  let divisaoDias = Math.floor(calculoDias / dia);

  // Exibe o número de dias
  h3Result.textContent = divisaoDias;
}


btCalculo.onclick = function (){
    contdorDeDias()
}