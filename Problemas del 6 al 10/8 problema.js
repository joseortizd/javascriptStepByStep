// Extraído de:
// http://progra.usm.cl/apunte/ejercicios/1/parte-decimal.html
function parteDecimal(numero) {
    return (numero+"").split(".");
}
input = -1.19;
console.log('0.'+parteDecimal(input)[1]);