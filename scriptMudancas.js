function corVermelha(){
    document.getElementById("botaoVermelho").style = "background-color: red;";
}
function corVerde(){
    document.getElementById("botaoVerde").style = "background-color: green;";
}
function mouseOver(){
	document.getElementById("photoLampada").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
}
function mouseOut(){
	document.getElementById("photoLampada").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
}
function ligarLampada(){
    document.getElementById("lampadaClick").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
}
//window.onload = load;
function load() {
    document.getElementById("textoJavaScript").innerHTML= "Esse texto foi inserido pelo JavaScript...";
}
function chamaRepeticao() {
    for(var i=0; i <2; i++){
        console.log("Repetição.");
    }
}
function chamaRepeticaoComWhile() {
    var i = 0;
    while( i <2){
        console.log("Repetição.");
        i++;
    }
}
function chamaRepeticaoForEach() {
    let repeticao = ['Repetição', 'Repetição', 'Repetição'];

    function usarForEach(repeticao) {
        console.log(repeticao);
    }

    repeticao.forEach(usarForEach);
}

function chamaRepeticaoNumerica() {
    for(var i=0; i <11; i++){
        console.log(i);
    }
}
function numerosPares() {
    for(var i=0; i <21; i++){
        if (i%2 == 0){
            console.log(i);
        }
    }
}
function tabuada(){
    for(var count=1; count<=10 ; count++){
        for(var i=1; i<=10 ; i++){
            document.write(count+" x "+i+" = " + (count*i) + "<br />");
        }
    }  
}