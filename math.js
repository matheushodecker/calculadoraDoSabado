let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let Soma = document.querySelector("#btnSoma");
let Subtracao = document.querySelector("#btnSubtracao");
let Divisao = document.querySelector("#btnDivisao");
let Multiplicacao = document.querySelector("#btnMultiplicacao");

Soma.addEventListener("click", function() {
    somar(Number(valor1.value), Number(valor2.value));
});

Subtracao.addEventListener("click", function() {
    subtrair(Number(valor1.value), Number(valor2.value));
});

Divisao.addEventListener("click", function() {
    dividir(Number(valor1.value), Number(valor2.value));
});

Multiplicacao.addEventListener("click", function() {
    Multiplicar(Number(valor1.value), Number(valor2.value));
});


function somar(a, b) {
    let Soma = a + b;
    resultado.innerHTML = Soma;
}
function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}
function dividir(a, b) {
    let divisao = a / b;
    resultado.innerHTML = divisao;
}
function Multiplicar(a, b) {
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao;
}
