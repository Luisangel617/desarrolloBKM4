import { Sequelize } from 'sequelize';

export const sequelize =new Sequelize(

    'tienda_db',// db name
    'postgres',//username
    'sasa',//password
    {
        host:'localhost',
        dialect:'postgres',
    }

);


