import { Router } from 'express';
import {getUsuarios,createUsuario,getUsuario,updateUsuario,deleteUsuario} from '../controllers/usuario.controller.js';

const router=Router()

//Rutas

router.get('/',getUsuarios);
router.post('/',createUsuario);
router.get('/:id',getUsuario);
router.put('/:id',updateUsuario);
router.delete('/:id',deleteUsuario);

export default router;