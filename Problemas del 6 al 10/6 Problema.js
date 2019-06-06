// Extraído de:
// http://progra.usm.cl/apunte/ejercicios/1/pitagoras.html
function pitagoras(catetoA, catetoB) {
    return Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2));
}

catetoA = 7;
catetoB = 5;
console.log('La hipotenusa es ' + pitagoras(catetoA, catetoB));