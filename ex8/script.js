let camisetasP = document.getElementById("camisetasP")
let camisetasM = document.getElementById("camisetasM")
let camisetasG = document.getElementById("camisetasG")
let btCalculo = document.getElementById("btCalculo")
let h3Result = document.getElementById("h3Result")

function calculaValorUniforme () {
    let quantidaDeCamisetasP = Number(camisetasP.value);
    let quantidaDeCamisetasM = Number(camisetasM.value);
    let quantidaDeCamisetasG = Number(camisetasG.value);

    let valorCamisetasP = quantidaDeCamisetasP * 10;
    let valorCamisetasM = quantidaDeCamisetasM * 12;
    let valorCamisetasG = quantidaDeCamisetasG * 15;

    let valorTotal = valorCamisetasP + valorCamisetasM + valorCamisetasG;

    h3Result.textContent = `O valor total de camisetas é: ${valorTotal}`;
}


btCalculo.onclick = function (){
    calculaValorUniforme();
}