let valorTotal = document.querySelector("#valorTotal");
let btresultado = document.querySelector("#btresultado");
let resultado1 = document.querySelector("#resultado1");

function divisaoConta(){
    let v1 = valorTotal.value;
    let valorAndre = parseInt(v1 / 3);
    let valorCarlos = parseInt(v1 / 3);
    let valorFelipe = v1 - (valorAndre + valorCarlos);
    resultado1.textContent = "André deverá pagar " + valorAndre + ". " + "Carlos irá pagar " + valorCarlos + ". " +
    "Felipe irá pagar " + valorFelipe + ".";
}

btresultado.onclick = function(){
    divisaoConta();
}