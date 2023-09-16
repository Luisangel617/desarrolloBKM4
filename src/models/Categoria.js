import { sequelize } from "../database/database.js";
import { DataTypes} from 'sequelize'
import { Producto } from './Producto.js';

export const Categoria=sequelize.define(
    'categorias',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            comment: 'Nombre del producto',
        },        
        
    }
    
)


Categoria.hasMany(Producto,
    {
        foreignKey:'categoria_id',
        sourceKey:'id',
    }
);

Producto.belongsTo(Categoria,
    {
        foreignKey:'categoria_id',
        targetKey:'id',
    });

