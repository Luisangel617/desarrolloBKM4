
import express from 'express';
import morgan from 'morgan';

const app=express()
 
// importar routes
import productoRoutes from './routes/producto.routes.js'
import usuarioRoutes from './routes/usuario.routes.js'
//Middleware

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/usuario',usuarioRoutes);
app.use('/api/producto',productoRoutes);

export default app;