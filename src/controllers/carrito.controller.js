import { carritosService } from "../services/index.js"



export async function crearCarrito(req,res) {
    const {body} = req

    try {
        const respuesta = await carritosService.crearCarrito(body)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

export async function getAllCarrito( req, res ) {
    try {
        const respuesta = await carritosService.getCarrito()
        res.status(200).json(respuesta)

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

export async function getCarritoById( req, res) {

    const { id } = req.params;
    try {
        const carrito = await carritosService.getCarritoById(id)

        res.status(200).json(carrito)
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
}


export async function putCarrito(req,res) {
    
    const {id} = req.params;
    const {body} = req;
   
    try {
        const carrito = await carritosService.putCarrito(id,body)
        res.status(200).json(carrito)

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}


export async function deleteCarrito( req, res ) {
    const {id} = req.params;
    try {
        const carrito = await carritosService.deleteCarrito(id)
        res.status(200).json(carrito)
        
    } catch (error) {
        
        res.status(400).send(error.message)
    }
}