import express from 'express';
import { productosControllers } from '../controllers/index.js';



const router = new express.Router();

router.get('/listarProductos',          productosControllers.listarProducto);
router.get('/listarProducto/:id',       productosControllers.getProductoById);

router.post('/crearProducto',           productosControllers.crearProducto);

router.put('/actualizarProducto/:id',   productosControllers.putProducto);


router.delete('/eliminarProducto/:id',  productosControllers.deleteProducto);

export {router}