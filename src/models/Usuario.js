import { sequelize } from '../database/database.js';
import { DataTypes} from 'sequelize'
import { Producto } from './Producto.js';
import { Categoria } from './Categoria.js';

export const Usuario=sequelize.define(
    'usuarios',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            comment: 'Nombre del usuario',
        },
        correo:{
            type:DataTypes.STRING,
        },
        contrasena:{
            type:DataTypes.STRING,
        },
        estado:{
            type:DataTypes.BOOLEAN,
        }
    },
    {
        timestamps:false,
    }
)

Usuario.hasMany(Producto,
    {
        foreignKey:'usuario_id',
        sourceKey:'id',
    }
);

Producto.belongsTo(Usuario,
    {
        foreignKey:'usuario_id',
        targetKey:'id',
    });

 Usuario.hasMany(Categoria,
    {
        foreignKey:'usuario_id',
        sourceKey:'id',
    }
   );
    
  Categoria.belongsTo(Usuario,
        {
            foreignKey:'usuario_id',
            targetKey:'id',
        });