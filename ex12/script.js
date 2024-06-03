let numCentena = document.querySelector("#numCentena");
let numDezena = document.querySelector("#numDezena");
let numUnidade = document.querySelector("#numUnidade");
let btresultado = document.querySelector("#btresultado");
let h3resultado = document.querySelector("#h3resultado");
let h3resultado2 = document.querySelector("#h3resultado2");

function unidadeFinal(){
    let centena = numCentena.value;
    let dezena = numDezena.value;
    let unidade = numUnidade.value;
    let resultado = centena + dezena + unidade;
    h3resultado.textContent = "O número inteiro é de " + resultado; 
    h3resultado2.textContent = "A quantidade de centenas é de " + centena + "." + " A quantidade de dezenas é de " + dezena + "." +
    " A quantidade de unidades é de " + unidade;
}

btresultado.onclick = function(){
    unidadeFinal();
}