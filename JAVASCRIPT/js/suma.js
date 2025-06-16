// definir las variables
// requisistos: 
// 5 + 10= 15
// n1 + n2= resultado
let n1 = 5;
let n2 = 10;
let resultado = n1 + n2;

// imprimir el resultado con template literals
console.log(`El resultado de la suma es: ${resultado}`);
// imprimir el resultado con concatenación
console.log("El resultado de la suma es: " + resultado);

function calcSuma() {
    let n1 = parseFloat(document.getElementById("numero_1").value);
    let n2 = parseFloat(document.getElementById("numero_2").value);
    let resultado = n1 + n2;
    
    // imprimir el resultado con template literals
    let h1_res= document.getElementById("resultado");
    h1_res.innerHTML = resultado;
}

function calcResta() {
    let n1 = parseFloat(document.getElementById("numero_1").value);
    let n2 = parseFloat(document.getElementById("numero_2").value);
    let resultado = n1 - n2;

    // imprimir el resultado con template literals
    let h1_res= document.getElementById("resultado");
    h1_res.innerHTML = resultado;
}

function calcMultiplicacion() {
    let n1 = parseFloat(document.getElementById("numero_1").value);
    let n2 = parseFloat(document.getElementById("numero_2").value);
    let resultado = n1 * n2;

    // imprimir el resultado con template literals
    let h1_res= document.getElementById("resultado");
    h1_res.innerHTML = resultado;
}

function calcDivision() {
    let n1 = parseFloat(document.getElementById("numero_1").value);
    let n2 = parseFloat(document.getElementById("numero_2").value);
    if (n2 === 0) {
        alert("No se puede dividir por cero");
        return;
    }
    let resultado = n1 / n2;

    // imprimir el resultado con template literals
    let h1_res= document.getElementById("resultado");
    h1_res.innerHTML = resultado;
}
