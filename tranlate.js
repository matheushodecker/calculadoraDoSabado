let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./idiomas/espanhol.js";
document.head.appendChild(linguaEspanhola);

let linguaIngles = document.createElement("script");
linguaIngles.src = "./idiomas/ingles.js";
document.head.appendChild(linguaIngles);

let linguaFrances = document.createElement("script");
linguaFrances.src = "./idiomas/frances.js";
document.head.appendChild(linguaFrances);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function(){
    translate(this.value);
});

function translate(idioma){
    let traducao = 
    (idioma == "br") ? portugues()
    :(idioma == "es")? espanhol()
    :(idioma == "fr")? frances()
    :(idioma == "en")? ingles()
    :null;
    setLanguage(traducao)
}
function setLanguage(novoIdioma){
    let btnSoma = document.querySelector("#btnSoma");
    btnSoma.value = novoIdioma.Soma;

    let btnSubtracao = document.querySelector("#btnSubtracao");
    btnSubtracao.value = novoIdioma.Subtracao;

    let btnMultiplicacao = document.querySelector("#btnMultiplicacao");
    btnMultiplicacao.value = novoIdioma.Multiplicacao;

    let btnDivisao = document.querySelector("#btnDivisao");
    btnDivisao.value = novoIdioma.Divisao;

    let titulo = document.querySelector("#titulo");
    titulo.value = novoIdioma.titulo;
}
