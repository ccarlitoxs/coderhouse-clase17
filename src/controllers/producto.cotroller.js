import { productosService } from "../services/index.js"



export async function crearProducto(req,res) {
    const {body} = req

    try {
        const respuesta = await productosService.CrearProducto(body)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

export async function listarProducto( req, res ) {
    try {
        const respuesta = await productosService.getProductos()
        res.status(200).json(respuesta)

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

export async function getProductoById( req, res) {

    const { id } = req.params;
    try {
        const producto = await productosService.getProductoById(id)

        res.status(200).json(producto)
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
}


export async function putProducto(req,res) {
    
    const {id} = req.params;
    const {body} = req;
   
    try {
        const producto = await productosService.putProducto(id,body)
        res.status(200).json(producto)

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}


export async function deleteProducto( req, res ) {
    const {id} = req.params;
    try {
        const producto = await productosService.deleteProducto(id)
        res.status(200).json(producto)
        
    } catch (error) {
        
        res.status(400).send(error.message)
    }
}