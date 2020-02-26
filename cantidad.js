export default class Cantidad {
    constructor(valor, unidad){
        this.valor = valor
        this.unidad = unidad
    }

    getDescripcion(){
        return`${this.valor} ${this.unidad}`
    }
}