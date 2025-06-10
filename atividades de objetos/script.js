function calculo(num1, num2, operacao) {
    let resultado;
    if (operacao.toLowerCase() === 'soma') {
        resultado = num1 + num2;
    } else if (operacao.toLowerCase() === 'subtracao') {
        resultado = num1 - num2;
    } else {
        return null;
    }
    return resultado;
}

function iniciarCalculo() {
    const resultadoParagrafo = document.getElementById('resultado');
    const valorResultadoSpan = document.getElementById('valorResultado');
    const erroParagrafo = document.getElementById('erro');

    resultadoParagrafo.style.display = 'none';
    erroParagrafo.style.display = 'none';
    erroParagrafo.textContent = '';

    let numero1 = parseFloat(prompt("Por favor, digite o primeiro número:"));

    if (isNaN(numero1)) {
        erroParagrafo.textContent = "Erro: O primeiro valor digitado não é um número válido.";
        erroParagrafo.style.display = 'block';
        return;
    }

    let operacao = prompt("Por favor, digite a operação (soma ou subtracao):").toLowerCase();

    if (operacao !== 'soma' && operacao !== 'subtracao') {
        erroParagrafo.textContent = "Erro: Operação inválida. Digite 'soma' ou 'subtracao'.";
        erroParagrafo.style.display = 'block';
        return;
    }

    let numero2 = parseFloat(prompt("Por favor, digite o segundo número:"));

    if (isNaN(numero2)) {
        erroParagrafo.textContent = "Erro: O segundo valor digitado não é um número válido.";
        erroParagrafo.style.display = 'block';
        return;
    }

    const resultadoCalculo = calculo(numero1, numero2, operacao);

    if (resultadoCalculo !== null) {
        valorResultadoSpan.textContent = resultadoCalculo;
        resultadoParagrafo.style.display = 'block';
    } else {
        erroParagrafo.textContent = "Erro interno: A operação não foi reconhecida pela função de cálculo.";
        erroParagrafo.style.display = 'block';
    }
}