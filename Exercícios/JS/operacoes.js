function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n2 !== 0 ? n1 / n2 : "Não é possível dividir por zero";

    document.getElementById("resultado").innerHTML = `
        Soma: ${soma} <br>
        Subtração: ${subtracao} <br>
        Multiplicação: ${multiplicacao} <br>
        Divisão: ${divisao}
    `;
}