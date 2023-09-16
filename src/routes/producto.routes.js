import { Router } from 'express';
import {getProductos,createProducto,getProducto,updateProducto,deleteProducto} from '../controllers/producto.controller.js';
const router=Router()

//Rutas

router.get('/',getProductos);
router.post('/',createProducto);
router.get('/:id',getProducto);
router.put('/:id',updateProducto);
router.delete('/:id',deleteProducto);


export default router;