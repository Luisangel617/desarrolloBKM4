import {Categoria} from '../models/Categoria.js'
import {Producto} from '../models/Producto.js'

export async function getCategorias(req,res){
   
    try {
        const categoria= await Categoria.findAll({
            attributes:['id','nombre','usuario_id'],
            //order :[('id','DESC')],
        })
        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}


export async function createCategoria(req,res){

    const { nombre,usuario_id }=req.body;

    try {
        const newCategoria=await Categoria.create(
            {
                nombre,
                usuario_id,
            },
            {
                fields:['nombre','usuario_id']
            }            
        );
        return res.json(newCategoria);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}


export async function getCategoria(req,res){

    const { id }=req.params;
    try {
        const categoria=await Categoria.findOne({
            where :{id},
        })
        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}

export async function updateCategoria(req,res){

    const { id }=req.params;
    const { nombre,usuario_id  }=req.body;
    try {
        const categoria=await Categoria.findByPk(id);
        categoria.nombre=nombre;       
        categoria.usuario_id=usuario_id;
        await categoria.save();

        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}

export async function deleteCategoria(req,res){

    const { id }=req.params;
    try {
        await Producto.destroy({
            where :{categoria_id:id},
        });
       await Categoria.destroy({
        where :{id},
        });
         return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }   
}



