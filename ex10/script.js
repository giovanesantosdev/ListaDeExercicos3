let quantidadeDias = document.getElementById("quantidadeDias")
let btCalcular = document.getElementById("btCalcular")
let h3Result = document.getElementById("h3Result")

function calcularDias (){
    let dias = (quantidadeDias.value);

    let ano = dias / 365
    let mes = dias / 30

    if (ano < 1 && mes < 1){
        h3Result.textContent = `A quantidade de dias sem acidente é: ${dias}`
    }else if(mes >= 1 && ano < 1){
        h3Result.innerHTML = `A quantidade de dias sem acidente é: ${dias}<br><br>
        A quantidade de Meses sem acidente é: ${mes}` 
    } else{
        h3Result.innerHTML =`A quantidade de dias sem acidente é: ${dias}<br><br>
        A quantidade de Meses sem acidente é: ${mes}<br><br>       
        A quantidade de anos sem acidente é: ${ano}` 

    }  
}

btCalcular.onclick = function (){
    calcularDias();
}