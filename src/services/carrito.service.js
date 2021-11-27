import { carritoModel } from "../models/index.js";

export async function crearCarrito(data){
    try {
        const respuesta = await carritoModel.default.create(data)
        return respuesta
    } catch (error) {
        throw new Error(error)        
    }
}

export async function getCarrito() {
    try {
        const respuesta = await carritoModel.default.find()
        return respuesta
    } catch (error) {
        throw new Error(error)        
        
    }
    
}

export async function getCarritoById(id) {
    try {
        const existe = await carritoModel.default.findById(id)
        if(!existe){
            throw new Error(`carrito con el ${id} no existe`)
        }
        return existe
    } catch (error) {
        throw new Error(error)        
        
    }
}

export async function putCarrito(id,data) {
    try {
        const existe = await carritoModel.default.findById(id)
        if(!existe){
            throw new Error(`carrito con el ${id} no existe`)
        }
        const carrito = await carritoModel.default.findByIdAndUpdate(id,data)
        return carrito
    } catch (error) {
        throw new Error(error)        
        
    }
}


export async function deleteCarrito(id) {
    try {
        const carrito = await carritoModel.default.deleteOne({_id:id})
        return carrito

    } catch (error) {
        throw new Error(error)               
    }
}