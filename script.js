function calcularprecio(preciounitario,cantidad){
    const total=preciounitario*cantidad;
    return total
}

//function puedereservar(cantidad){
  //  return cantidad<=2;
//}



//const botonReservar =document.querySelector("#buton-reserva");
//
//botonReservar.addEventListener("click", function() {
  //console.log("El usuario hizo clic");
//});


function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#buton-reserva");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("dblclick", function() {
  const tazasActuales = Number(contadorTazas.textContent);
  let contador=0;
  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    contador=Number(contadorTazas.textContent)
    if (contador>0 &&contador<50){
         console.log("Reserva Registrada solo kedan",contador)
    }
 
  } else {
    botonReservar.textContent = "Sin cupos";
    console.log("No hay cupos disponibles")
    botonReservar.disabled = true;
  }
});



