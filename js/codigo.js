import Cuaderno from "./Cuaderno.js";
import Mochila from "./Mochilas.js";
import Regalo from "./Regalos.js";

//tabs diferentes formularios
function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  event.target.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className +=
    " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);

let productos = [];

//let alumnos = [alumnoPrueba, alumnoPrueba];
//ELEMENTOS

let btIngresarCuaderno = document.querySelector("#btIngresarC");
let btMostrarCuaderno = document.querySelector("#btMostrarC");

let btIngresarMochila = document.querySelector("#btIngresarM");
let btMostrarMochila = document.querySelector("#btMostrarM");

let btIngresarRegalo = document.querySelector("#btIngresarR");
let btMostrarRegalo = document.querySelector("#btMostrarR");

let mostrarProducto = document.querySelector("#mostrarProducto");

//globales nuevos
/* let txtNombre = document.querySelector("#nombre");
let txtCodigo = document.querySelector("#codigo");
let txtPrecio = document.querySelector("#precio");
let txtMarca = document.querySelector("#marca"); */

//EVENTOS

btIngresarCuaderno.addEventListener("click", ingresCuaderno);
btMostrarCuaderno.addEventListener("click", mostrarDatosCuadernos);

btIngresarMochila.addEventListener("click", ingresMochilas);
btMostrarMochila.addEventListener("click", mostrarDatosMochilas);

btIngresarRegalo.addEventListener("click", ingresRegalos);
btMostrarRegalo.addEventListener("click", mostrarDatosRegalos);

///funciones para ingresar productos

function ingresCuaderno() {
  let txtNombreC = document.querySelector("#nombreC");
  let txtCodigoC = document.querySelector("#codigoC");
  let txtPrecioC = document.querySelector("#precioC");
  let txtMarcaC = document.querySelector("#marcaC");
  let txtCantidadHojasC = document.querySelector("#cantidadHojasC");
  let txtTipoTapaC = document.querySelector("#tipoTapaC");
  let txtMaterialC = document.querySelector("#tipoMaterialC");
  let txtTipoHojaC = document.querySelector("#tipoHojaC");

  //el prompt en este ejemplo sustituye el input.value
  let nombreProductoCIngresado = txtNombreC.value;
  let codigoCIngresado = txtCodigoC.value;
  let precioCIngresado = txtPrecioC.value;
  let marcaCIngresado = txtMarcaC.value;
  let cantidadHojasCIngresado = txtCantidadHojasC.value;
  let tipoTapaCIngresado = txtTipoTapaC.value;
  let materialCIngresado = txtMaterialC.value;
  let tipoHojaCIngresado = txtTipoHojaC.value;

  let cuadernoIngresado = new Cuaderno(
    nombreProductoCIngresado,
    marcaCIngresado,
    codigoCIngresado,
    precioCIngresado,
    cantidadHojasCIngresado,
    tipoTapaCIngresado,
    materialCIngresado,
    tipoHojaCIngresado
  );

  console.log(cuadernoIngresado);
  productos.push(cuadernoIngresado);
  console.log(productos);
}

function ingresMochilas() {
  let txtNombreM = document.querySelector("#nombreM");
  let txtCodigoM = document.querySelector("#codigoM");
  let txtPrecioM = document.querySelector("#precioM");
  let txtMarcaM = document.querySelector("#marcaM");
  let txtMaterialM = document.querySelector("#materialM");
  let txtTipoM = document.querySelector("#tipoM");
  let txtTipoUsoM = document.querySelector("#tipoUsoM");

  //el prompt en este ejemplo sustituye el input.value
  let nombreProductoMIngresado = txtNombreM.value;
  let codigoMIngresado = txtCodigoM.value;
  let precioMIngresado = txtPrecioM.value;
  let marcaMIngresado = txtMarcaM.value;
  let materialMIngresado = txtMaterialM.value;
  let tipoMIngresado = txtTipoM.value;
  let materialCIngresado = txtTipoUsoM.value;

  let mochilaIngresada = new Mochila(
    nombreProductoMIngresado,
    marcaMIngresado,
    codigoMIngresado,
    precioMIngresado,
    materialMIngresado,
    tipoMIngresado,
    materialCIngresado
  );

  console.log(mochilaIngresada);
  productos.push(mochilaIngresada);
  console.log(productos);
}

function ingresRegalos() {
  let txtNombreR = document.querySelector("#nombreR");
  let txtCodigoR = document.querySelector("#codigoR");
  let txtPrecioR = document.querySelector("#precioR");
  let txtMarcaR = document.querySelector("#marcaR");
  let txtTipoR = document.querySelector("#tipoR");
  let txtOcasionR = document.querySelector("#ocasionR");
  let txtEdadR = document.querySelector("#edadR");

  //el prompt en este ejemplo sustituye el input.value
  let nombreProductoRIngresado = txtNombreR.value;
  let codigoRIngresado = txtCodigoR.value;
  let precioRIngresado = txtPrecioR.value;
  let marcaRIngresado = txtMarcaR.value;
  let tipoRIngresado = txtTipoR.value;
  let ocasionRIngresado = txtOcasionR.value;
  let edadRIngresado = txtEdadR.value;

  let regaloIngresado = new Regalo(
    nombreProductoRIngresado,
    marcaRIngresado,
    codigoRIngresado,
    precioRIngresado,
    tipoRIngresado,
    ocasionRIngresado,
    edadRIngresado
  );

  console.log(regaloIngresado);
  productos.push(regaloIngresado);
  console.log(productos);
}

/////////////

///funciones para mostrar productos

function mostrarDatosCuadernos() {
  mostrarProducto.innerHTML = "";
  let contenido = "";
  productos.forEach((element) => {
    contenido += element.mostrarProducto();
  });
  mostrarProducto.innerHTML += contenido;
}

function mostrarDatosMochilas() {
  mostrarProducto.innerHTML = "";
  let contenido = "";
  productos.forEach((element) => {
    contenido += element.mostrarProducto();
  });
  mostrarProducto.innerHTML += contenido;
}

function mostrarDatosRegalos() {
  mostrarProducto.innerHTML = "";
  let contenido = "";
  productos.forEach((element) => {
    contenido += element.mostrarProducto();
  });
  mostrarProducto.innerHTML += contenido;
}
