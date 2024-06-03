let primeiraMedida = document.getElementById("primeiraMedida")
let segundaMedida = document.getElementById("segundaMedida")
let btcalculo = document.getElementById("btcalculo")
let h3result = document.getElementById("h3result")


function calcularArear() {

    let pM = Number(primeiraMedida.value);
    let sM = Number(segundaMedida.value);
    
    let resultado = (pM * 2) + (sM * 2);
    h3result.textContent = `A area do terreno é de: ${resultado}M`;

}

btcalculo.onclick = function (){
    calcularArear();
}