let valorGasolina = document.getElementById("valorGasolina")
let pagamentoGasolina = document.getElementById("pagamentoGasolina")
let btCalculo = document.getElementById("btCalculo")
let h3Result = document.getElementById("h3Result")


function calcularQuantidadeLitros () {
    let precoGasolina = Number(valorGasolina.value);
    let valorPago = Number(pagamentoGasolina.value);

    let calculo = (valorPago / precoGasolina);
    h3Result.textContent = `A quatidade abastecida em litros é ${calculo}`;

}

btCalculo.onclick = function (){
    calcularQuantidadeLitros();
}