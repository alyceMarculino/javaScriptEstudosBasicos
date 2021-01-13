function distribuicaoProCalculo(operacaoASerFeita){
	var s1 = document.getElementById("s1").value;
	var s2 = document.getElementById("s2").value;

	if (checarParametros(s1,s2)){
		switch (operacaoASerFeita) {
			case 1:
				somarValores(s1,s2);
				  break;
			case 2:
				subtrairValores(s1,s2);
				break;
			case 3:
				dividirValores(s1,s2);
				break;
			case 4:
				multiplicarValores(s1,s2);
				break;
			case 5:
				resto(s1,s2);
				break;
			default:
		}
	}
	else{
		document.getElementById("resultado").innerHTML= "Por favor preencer ambos os campos.";
	}
}
function checarParametros(v1,v2){
	if(v1 == "" || v2 == ""){
		return false;
	}
	else{
		return true;
	}
}
function somarValores(v1,v2){
	var s3 = parseInt(v1) + parseInt(v2); 
	document.getElementById("resultado").innerHTML= s3;
}
function subtrairValores(v1,v2){
	var s3 = parseInt(v1) - parseInt(v2); 
	document.getElementById("resultado").innerHTML= s3;
}
function dividirValores(v1,v2){
	var s3 = parseInt(v1) / parseInt(v2); 
	document.getElementById("resultado").innerHTML= s3;
}
function multiplicarValores(v1,v2){
	var s3 = parseInt(v1) * parseInt(v2); 
	document.getElementById("resultado").innerHTML= s3;
}
function resto(v1,v2){
	var s3 = parseInt(v1) % parseInt(v2); 
	document.getElementById("resultado").innerHTML= s3;
}
function checagemParImpar(){
	var numero = document.getElementById("numeroPraChecar").value;
	var resultado = numero % 2; 
	console.log(resultado);
	if (resultado == 0){
		document.getElementById("resultChecagem").innerHTML= "Par";
	}
	else{
		document.getElementById("resultChecagem").innerHTML= "Impar";
	}
	
}
function descontos(){
	var valor = document.getElementById("valor").value;
	var desconto = document.getElementById("desconto").value;

	if (checarParametros(valor,desconto)){
		var valorDoDesconto = valor * (desconto/100);
		document.getElementById("valorDoDesconto").innerHTML= "O valor do descontro é: "+ valorDoDesconto +".";
	}
	else{
		document.getElementById("valorDoDesconto").innerHTML= "Por favor preencer ambos os campos.";
	}
	
}
function verificarIdade(){
	var anoDeNascimento = document.getElementById("anoDeNascimento").value;
	var data = new Date();
	var anoAtual= data.getFullYear(); 
	var idade = anoAtual - anoDeNascimento;
	if (idade >= 18){
		document.getElementById("idadeAtual").innerHTML= "Maior de idade.";
	}
	else{
		document.getElementById("idadeAtual").innerHTML= "Menor de idade.";
	}
}