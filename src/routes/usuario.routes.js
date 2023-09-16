import { Router } from 'express';
import {getUsuarios,createUsuario,getUsuario,updateUsuario,deleteUsuario, getUsuarioCategoria,getCategoriasProductos} from '../controllers/usuario.controller.js';

const router=Router()

//Rutas

router.get('/',getUsuarios);
router.post('/',createUsuario);
router.get('/:id',getUsuario);
router.put('/:id',updateUsuario);
router.delete('/:id',deleteUsuario);

router.get('/:id/categoria',getUsuarioCategoria);
router.get('/:id/categoria/all',getCategoriasProductos);

export default router;