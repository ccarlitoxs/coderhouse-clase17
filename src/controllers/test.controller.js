
import { testService } from "../services/index.js"



export async function postProductosFaker( req, res,next ) {

    const cant = req.query.cant
    try {
         await testService.postProduct(cant)
        res.status(200).json("Productos creados con exito")

    } catch (error) {
        next(error)
        
    }
}
export async function getProductosFaker( req, res ) {
    try {
        const respuesta = await testService.getProductos()
        
        res.status(200).json({productos: respuesta})

        //Para renderizar la vista index con ejs, por algun motivo no me compila con ejs, (por usar sintaxis de ECCM6)
        //res.status(200).render({respuesta})

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}