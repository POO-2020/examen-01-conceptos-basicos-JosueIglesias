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
        return`El numero de ingredientes son: `
        this.ingredientes.forEach((ingrediente, i)=> {
            
        })
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