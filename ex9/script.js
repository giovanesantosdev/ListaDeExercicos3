let x1 = document.getElementById("x1")
let x2 = document.getElementById("x2")
let y1 = document.getElementById("y1")
let y2 = document.getElementById("y2")
let btCalcular = document.getElementById("btCalcular")
let h3Result = document.getElementById("h3Result")

function calculoPlanoCartesiano (){

    //Entrada de dados

    let valorX1 = parseFloat(x1.value);
    let valorX2 = parseFloat(x2.value);
    let valorY1 = parseFloat(y1.value);
    let valorY2 = parseFloat(y2.value);

    //Calculo

        let calculo = Math.pow((valorX2 - valorX1), 2) + Math.pow((valorY2 - valorY1), 2); 
        let distanciaEntrePontos = Math.sqrt(calculo);
        h3Result.textContent = `A distancia entre os dois pontos é ${distanciaEntrePontos}`;
}

btCalcular.onclick = function (){
    calculoPlanoCartesiano();
}