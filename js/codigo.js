alert("Empresa Telefonica")

let Minutos;
let operador;
const opFijo=0.20;
const opClaro=0.40;
const opMovistar=0.60;
const opEntel=1.00
let preciodelallamada;

Minutos=parseFloat(prompt("Indique el tiempo de la duracion de la llamada"));
operador=prompt("Indique el operador telefonico");

let CosFijo=Minutos*opFijo
let CosClaro=Minutos*opClaro
let CosMovistar=Minutos*opMovistar
let CosEntel=Minutos*opEntel

document.write(`La duracion de la llamada ha sido ${Minutos} Minuto(s) El monto a pagar al operador Fijo S/. ${CosFijo} <br>`)
document.write(`La duracion de la llamada ha sido ${Minutos} Minuto(s) El monto a pagar al operador Claro S/. ${CosClaro} <br>`)
document.write(`La duracion de la llamada ha sido ${Minutos} Minuto(s) El monto a pagar al operador Movistar S/. ${CosMovistar} <br>`)
document.write(`La duracion de la llamada ha sido ${Minutos} Minuto(s) El monto a pagar al operador Entel S/. ${CosEntel} <h2>Gracias por usar nuestro servicio telefonico</h2> <h3>Vuelva Pronto</h3> <br>
`)




