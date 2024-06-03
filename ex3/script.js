let paoFrances = document.getElementById("paoFrances")
let broa = document.getElementById("broa")
let btResultado = document.getElementById("btResultado")
let h3result = document.getElementById("h3result")
let segundoResultado = document.getElementById("segundoResultado")


function calculaPao() {
	let paoF = paoFrances.value;
	let paoB = broa.value;
	let contaF= paoF * 0.12;
	let contaB = paoB * 1.50;

	h3result.textContent = "o valor total de paes vendidos é de: " + (contaF + contaB) + " R$"
	let reajuste = (contaB + contaF)/ 10;

	segundoResultado.textContent = "o valor depositado na poupança deve ser de: " + (reajuste) + " R$"
}

btResultado.onclick = function (){
	calculaPao();
}
