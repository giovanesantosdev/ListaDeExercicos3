let dimetroPizza = document.getElementById("dimetroPizza");
let btCalcular = document.getElementById("btCalcular");
let h3Result = document.getElementById("h3Result");

function calcularAreaPizza (){
    let diametro = Number(dimetroPizza.value);
    let calculaRaio = diametro / 2;

    let calculaArea = 3.14 * (Math.pow(calculaRaio, 2));

    h3Result.textContent = `A area da sua Pizza é: ${calculaArea}`
}

btCalcular.onclick = function (){
    calcularAreaPizza();
}