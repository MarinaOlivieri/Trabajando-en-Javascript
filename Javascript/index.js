function solicitarNumero(){
    let numero = prompt("Ingrese un numero");
    return parseInt(numero)
} 
function sumar(parametroA, parametroB){
    let resultado = parametroA + parametroB
    console.log("resultado es:" + resultado)
    return resultado
}

let a = solicitarNumero()
let b = solicitarNumero()
let sum = sumar(a, b)
console.log(sum)