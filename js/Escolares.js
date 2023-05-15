class ProdEscolares {
  constructor(nombreProdEsc, marcaProdEsc, codigoProdEsc, precioProdEsc) {
    this.nombre = nombreProdEsc;
    this.marca = marcaProdEsc;
    this.codigo = codigoProdEsc;
    this.precio = precioProdEsc;
  }

  saludar() {
    /*  console.log(`hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`) */
    let mensaje = `hola soy ${this.nombre} ${this.id} y tengo ${this.precio} años`;
    return mensaje;
  }
}

export default ProdEscolares;
