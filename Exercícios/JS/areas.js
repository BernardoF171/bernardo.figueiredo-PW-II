function Quadrado(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let areaq = n1 * n2;
    document.getElementById("resultado").innerHTML = `
        Area: ${areaq}`;
}
function retangulo(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let arear = n1 * n2;
    document.getElementById("resultado").innerHTML = `
        Area: ${arear}`;
}
function triangulo(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let x = n1 * n2;
    let areat = x / 2
    document.getElementById("resultado").innerHTML = `
        Area: ${areat}`;
}
function circulo(){
    let diametro = parseFloat(document.getElementById("num1").value);
    let raio = diametro / 2;
    let area = raio * raio * 3.14;
    document.getElementById("resultado").innerHTML = `
        Area: ${area}`;
}
