import ProdEscolares from "./Escolares.js";

class Cuaderno extends ProdEscolares {
  constructor(
    nombreC,
    marcaC,
    codigoC,
    precioC,
    cantidadHojasC,
    tipoTapaC,
    materialC,
    tipoHojaC
  ) {
    super(nombreC, marcaC, codigoC, precioC);
    this.cantidadHojas = cantidadHojasC;
    this.tipoTapa = tipoTapaC;
    this.material = materialC;
    this.tipoHoja = tipoHojaC;
  }
  mostrarProducto() {
    let nuevoCuaderno = `
        <div class="col-4">
    <div class="card p-2 mb-3">
      <div class="card-body">
        <h4 class="card-title">${this.nombre} ${this.marca}</h4>
        <h6 class="card-text">${this.codigo}</h6>
        <p class="card-text">$ ${this.precio}</p>
        <p class="card-text">${this.cantidadHojas}</p>
        <p class="card-text">${this.tipoTapa}</p>
        <p class="card-text">${this.material}</p>
        <p class="card-text">${this.tipoHoja}</p>
      </div>
    </div>
  </div>`;

    return nuevoCuaderno;
  }
}

export default Cuaderno;
