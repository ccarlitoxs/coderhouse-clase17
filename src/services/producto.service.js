import { productosModel } from "../models/index.js";

export async function CrearProducto(data){
    try {
        const existe = await productosModel.default.findOne({nombre: data.nombre})
        if(existe){
            throw new Error(`producto ${data.nombre} ya existe`)
        }
        const respuesta = await productosModel.default.create(data)
        return respuesta
    } catch (error) {
        throw new Error(error)        
    }
}

export async function getProductos() {
    try {
        const respuesta = await productosModel.default.find()
        return respuesta
    } catch (error) {
        throw new Error(error)        
        
    }
    
}

export async function getProductoById(id) {
    try {
        const existe = await productosModel.default.findById(id)
        if(!existe){
            throw new Error(`producto con el ${id} no existe`)
        }
        return existe
    } catch (error) {
        throw new Error(error)        
        
    }
}

export async function putProducto(id,data) {
    try {
        const existe = await productosModel.default.findById(id)
        if(!existe){
            throw new Error(`producto con el ${id} no existe`)
        }
        const producto = await productosModel.default.findByIdAndUpdate(id,data)
        return producto
    } catch (error) {
        throw new Error(error)        
        
    }
}


export async function deleteProducto(id) {
    try {
        const producto = await productosModel.default.deleteOne({_id:id})
        return producto

    } catch (error) {
        throw new Error(error)               
    }
}