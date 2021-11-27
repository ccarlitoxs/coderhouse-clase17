import express from 'express';
import { carritosControllers } from '../controllers/index.js';



const router = new express.Router();



router.post('/crearCarrito',           carritosControllers.crearCarrito);

router.get('/listarCarritos',         carritosControllers.getAllCarrito)
router.get('/listarCarrito/:id',         carritosControllers.getCarritoById)

router.put('/actualizarCarrito/:id',         carritosControllers.putCarrito)

router.delete('/borrarCarrito/:id',         carritosControllers.deleteCarrito)



export {router}