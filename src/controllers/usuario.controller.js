import {Usuario} from '../models/Usuario.js'
import {Producto} from '../models/Producto.js'
import {Categoria} from '../models/Categoria.js'

export async function getUsuarios(req,res){
   
    try {
        const usuario= await Usuario.findAll({
            attributes:['id','nombre','correo','contrasena','estado']
        })
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

export async function createUsuario(req,res){

    const { nombre,correo,contrasena,estado }=req.body;
    try {
        const newUsuario=await Usuario.create(
            {
                nombre,
                correo,
                contrasena,
                estado,
            },
            {
                fields:['nombre','correo','contrasena','estado']
            }            
        );
        return res.json(newUsuario);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}

export async function getUsuario(req,res){

    const { id }=req.params;
    try {
        const usuario=await Usuario.findOne({
            where :{id},
        })
        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}


export async function updateUsuario(req,res){

    const { id }=req.params;
    const { nombre,correo,contrasena,estado }=req.body;
    try {
        const usuario=await Usuario.findByPk(id);
        usuario.nombre=nombre;
        usuario.correo=correo;
        usuario.contrasena=contrasena;
        usuario.estado=estado;
        await usuario.save();

        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}

export async function deleteUsuario(req,res){

    const { id }=req.params;
    try {
        await Producto.destroy({
            where :{usuario_id:id},
        });
       await Usuario.destroy({
        where :{id},
        });
      return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}

/**
 * SOLUCION 1
 * select u.*,c.nombre categoria,p.nombre producto
from usuarios u
inner join categorias c ON c.usuario_id=u.id
inner join productos p ON c.usuario_id=p.usuario_id
 * 
*SOLUCION 2 
* select * from productos where usuario_id in(
select id
from categorias 
where usuario_id in(
select id
from usuarios
where id=1))
 * 
  */

export async function getUsuarioCategoria(req,res){

    const { id }=req.params;

    try {
        const categoria=await Categoria.findAll({
           attributes:['id','nombre','usuario_id'],
            where :{usuario_id: id},
        })
        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

export async function getCategoriasProductos(req,res){

     try {
     
        const categoriaYproductosXusuario= await Usuario.findAll({
            attributes:['id','nombre','correo','contrasena','estado'],
            include:[
                {
                    model:Categoria,
                    required:true,                                    
                }
            ]

        })
        res.json(categoriaYproductosXusuario);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}