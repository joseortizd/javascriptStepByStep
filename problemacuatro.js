// Extraído de:
// http://progra.usm.cl/apunte/ejercicios/1/conversion-unidades-longitud.html
function converter(centimetros) {
    return (centimetros / 2.54);
}
centimetros = 45;
console.log(centimetros + ' cm = ' + converter(45) + ' in');