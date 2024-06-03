let pesoComida = document.getElementById("pesoComida")
let btCalculo = document.getElementById("btCalculo")
let h3Result = document.getElementById("h3Result")

function calculaValordoPrato () {

    let peso = Number(pesoComida.value) * 12;
    h3Result.textContent = peso
}

btCalculo.onclick = function (){
    calculaValordoPrato();
}
