import Ingrediente from "./ingrediente.js"
export default class Receta{
    constructor(nombre, autor) {
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = new Array 
    }
    agregarIngrediente(ingrediente){
        this.ingredientes.push(ingrediente)
    }

    mostrarEnConsola(){
        console.log(`Nombre de la receta: ${this.nombre}  Autor: ${this.autor}` )
        this.ingredientes.forEach((ingrediente, i)=> {
            console.log(`${i + 1} ${ingrediente.getDescripcion()}`)
        })
        
    }

    getNumeroIngredientes(){
        console.log(`Numero de ingredientes: ${this.ingredientes.length}`)
    }

    getCostoTotal(){
        let costoTotal = 0
        this.ingredientes.forEach((ingrediente, i)=> {
            costoTotal = costoTotal + ingrediente.costo
        })
        console.log(`Costo total: $${costoTotal}`)
    }


    /*registrarCitas(cita){
        this.citas.push(cita)
    }

    listarCitas(){
        this.citas.forEach((cita, i )=> {
            console.log(`${i + 1} ${cita.getPerfil()}`)
        })
    }
}*/
}