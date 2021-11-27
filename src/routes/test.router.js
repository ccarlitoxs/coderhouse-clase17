import  express  from "express";
import { testControllers } from '../controllers/index.js';


const router = new express.Router()

router.post('/', testControllers.postProductosFaker)
router.get('/',testControllers.getProductosFaker)

export {router}