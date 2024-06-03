let salarioFuncionario = document.querySelector("#salarioFuncionario")
let btResultado = document.querySelector("#btResultado");
let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");

function salarioAjustado(){
    let salarioInformado = parseFloat(salarioFuncionario.value);
    let reajusteAcrescimo = salarioInformado * 0.15;
    resultado1.textContent = "O salário informado com o ajuste de 15% é de " + (reajusteAcrescimo + salarioInformado) + " reais";
    let salarioReduzido =  (reajusteAcrescimo + salarioInformado) * (1 - 0.08);
    resultado2.textContent = "O salario após o decréscimo de 8% é de " + salarioReduzido + " reais";
}

btResultado.onclick = function(){
    salarioAjustado();
}