// Extraído de:
// http://progra.usm.cl/apunte/ejercicios/1/promedio.html
function calcularPromedio(input) {
    return input.length>0 ? input.reduce(function (a, b) { return a+b})/input.length : false;
}

let input = [55,71,46,87];
console.log('El promedio es:' + calcularPromedio(input));