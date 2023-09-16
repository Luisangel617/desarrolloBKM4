
import app from './app.js'
import { sequelize } from './database/database.js';
import 'dotenv/config'
import logger from './log/logger.js'


async function main(){
    console.clear();
    await sequelize.sync({ force:false})    

const PORT = process.env.PORT;
app.listen(PORT);

logger.info(`Server PORT ${PORT}`);
console.log('Server listening en' ,PORT);


}



main();