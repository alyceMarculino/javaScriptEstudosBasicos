function somarValores(){
	var s1 = document.getElementById("valor1").value;
	var s2 = document.getElementById("valor2").value;
	var s3 = parseInt(valor1) + parseInt(valor2);
	alert(s3);
}

function imprimirNomeCompleto (){
	document.getElementById("btn-exibir-nome").addEventListener("click", function() {
		var nome = document.getElementById('nome').value;
		var sobrenome = document.getElementById('sobrenome').value;
		var nomeCompleto = nome+sobrenome;
		var quantidadeDeDigitos = nomeCompleto.length;
		alert('Nome Completo: '+nome+' '+sobrenome+' contem '+quantidadeDeDigitos+ ' digitos');	
	});
}
function formatandoCPFSemPontos(){
	var cpf = document.getElementById('cpf').value;
	var resultado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
	alert(resultado);
}
function formatandoCPFComPontos(){
	var cpf = document.getElementById('cpf').value;
	var resultado = cpf.replace(/[^\d]+/g,'');
	alert(resultado);
}