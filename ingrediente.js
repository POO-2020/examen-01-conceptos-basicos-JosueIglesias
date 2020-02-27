export default class Ingrediente {
    constructor(nombre, cantidad, costo) {
        this.nombre = nombre
        this.cantidad = cantidad
        this.costo = costo
    }

    getDescripcion(){
        return`${this.cantidad.valor} ${this.cantidad.unidad} de ${this.nombre} $${this.costo}`
    }
}