import ProdEscolares from "./Escolares.js";

class Regalo extends ProdEscolares {
  constructor(nombreR, idR, marcaR, precioR, tipoR, ocasionR, edadR) {
    super(nombreR, marcaR, idR, precioR);
    this.tipo = tipoR;
    this.ocasion = ocasionR;
    this.edad = edadR;
  }
  mostrarProducto() {
    let nuevoRegalo = `
    <div class="col-4">
    <div class="card p-2 mb-3>
      <div class="card-body">
        <h4 class="card-title">${this.nombre} ${this.marca}</h4>
        <h6 class="card-text">${this.codigo}</h6>
        <p class="card-text">$ ${this.precio}</p>
        <p class="card-text">${this.tipo}</p>
        <p class="card-text">${this.ocasion}</p>
        <p class="card-text">${this.edad}</p>
      </div>
    </div>
  </div>`;

    return nuevoRegalo;
  }
}

export default Regalo;
