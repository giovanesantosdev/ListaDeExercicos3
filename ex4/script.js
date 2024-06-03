let nomePessoa = document.getElementById("nomePessoa");
let idadePessoa = document.getElementById("idadePessoa");
let btcalculo = document.getElementById("btcalculo");
let h3result = document.getElementById("h3result");

function calcularDiasDeVida () {
    nomePessoaResultado = String(nomePessoa.value);
    calculoDias = Number(idadePessoa.value) * 365;
    h3result.textContent = `${nomePessoaResultado} Voce ja viveu ${calculoDias} dias`

}

btcalculo.onclick = function (){
    calcularDiasDeVida();
}