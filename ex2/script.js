let quantidadeCavalos = document.getElementById("quantidadeCavalos");
let btcalculo = document.getElementById("btcalculo");
let h3Result = document.getElementById("h3Result");

function calculaQuantidadeFerraduras () {
    let quantidadeFerraduras = Number(quantidadeCavalos.value) * 4;

    h3Result.textContent = `A quantidade de ferraduras necessarias para equipar
    todos os cavalos do Haras é de: ${quantidadeFerraduras}`;

}

btcalculo.onclick = function () {
    calculaQuantidadeFerraduras();
}