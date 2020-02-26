import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
class Main {
    constructor(){
        this.cantidad1 = new Cantidad (100, "gramos")
        this.cantidad2 = new Cantidad (1, "litro")
        this.ingrediente1 = new Ingrediente("Canela", this.cantidad1, 15)
        this.ingrediente2 = new Ingrediente("Leche", this.cantidad2, 14)
    }

    probarCantidad(){
        console.log("----------Cantidad----------")
        console.log(this.cantidad1.getDescripcion())
        console.log(this.cantidad2.getDescripcion())
    }

    probarIngrediente(){
        console.log("----------Ingrediente----------")
        console.log(this.ingrediente1.getDescripcion())
        console.log(this.ingrediente2.getDescripcion())

    }
}
let app = new Main
app.probarCantidad()
app.probarIngrediente()