import ProdEscolares from "./Escolares.js";

class Mochila extends ProdEscolares {
  constructor(nombreM, marcaM, codigoM, precioM, materialM, tipoM, tipoUsoM) {
    super(nombreM, marcaM, codigoM, precioM);
    this.material = materialM;
    this.tipo = tipoM;
    this.tipoUso = tipoUsoM;
  }

  mostrarProducto() {
    let nuevaMochila = `
    <div class="col-4">
    <div class="card p-2 mb-3>
      <div class="card-body">
        <h4 class="card-title">${this.nombre} ${this.marca}</h4>
        <h6 class="card-text">${this.codigo}</h6>
        <p class="card-text">$ ${this.precio}</p>
        <p class="card-text">${this.material}</p>
        <p class="card-text">${this.tipo}</p>
        <p class="card-text">${this.tipoUso}</p>
      </div>
    </div>
  </div>
  </div>`;

    return nuevaMochila;
  }
}

export default Mochila;
