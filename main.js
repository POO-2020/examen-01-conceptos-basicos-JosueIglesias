import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"
class Main {
    constructor(){
        this.cantidad1 = new Cantidad (100, "gramos")
        this.cantidad2 = new Cantidad (1, "litro")
        this.cantidad3 = new Cantidad (25, "gramos")
        this.ingrediente1 = new Ingrediente("Canela", this.cantidad1, 15)
        this.ingrediente2 = new Ingrediente("Leche", this.cantidad2, 14)
        this.ingrediente3 = new Ingrediente("Azucar", this.cantidad3, 10 )
        this.receta1 = new Receta("Malteada de canela", "J.B. Iglesias")
    }

    probarCantidad(){
        console.log("----------Cantidad----------")
        console.log(this.cantidad1.getDescripcion())
        console.log(this.cantidad2.getDescripcion())
        console.log(this.cantidad3.getDescripcion())
    }

    probarIngrediente(){
        console.log("----------Ingrediente----------")
        console.log(this.ingrediente1.getDescripcion())
        console.log(this.ingrediente2.getDescripcion())
        console.log(this.ingrediente3.getDescripcion())

    }

    probarReceta(){
        console.log("----------Receta----------")
        this.receta1.agregarIngrediente(this.ingrediente1)
        this.receta1.agregarIngrediente(this.ingrediente2)
        this.receta1.agregarIngrediente(this.ingrediente3)
        this.receta1.mostrarEnConsola()
        this.receta1.getNumeroIngredientes()
        this.receta1.getCostoTotal()
    }
}
let app = new Main
app.probarCantidad()
app.probarIngrediente()
app.probarReceta()