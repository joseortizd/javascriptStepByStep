// Extraído de:
// http://progra.usm.cl/apunte/ejercicios/1/hora-futura.html
function horaFutura(horaActual, horas) {
    horasMayorQueDoce = 12 *(((horaActual+horas)/12)-Math.trunc((horaActual+horas)/12));
    horaActual = horas/12 > 0?  horasMayorQueDoce === 0 ? 12: horasMayorQueDoce : (horaActual+horas)-12;
    return horaActual;
}
horaActual = 11;
horas = 43;
console.log('En ' + horas + ' horas, el reloj marcará las ' + horaFutura(horaActual, horas));