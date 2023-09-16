import { sequelize } from "../database/database.js";
import { DataTypes} from 'sequelize'

export const Producto=sequelize.define(
    'productos',
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
        precio_unitario:{
            type:DataTypes.DOUBLE,
        },
        estado:{
            type:DataTypes.BOOLEAN,
        },
        
    }
    
)
