import express from 'express'
import cors from 'cors' //importa los paquetes cors-- permisos de acceso
import path from 'path'
import { fileURLToPath } from 'url'
import clientesRoutes from './routes/clientes.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'
import pedidos_detalleRoutes from './routes/pedidos_detalle.routes.js'

import clientesMedRoutes from './routes/clientesMed.routes.js'
import trabajadoresRoutes from './routes/trabajadores.routes.js'
import consumosRoutes from './routes/consumos.routes.js'
import medidoresRoutes from './routes/medidores.routes.js'
import rutaasignadaRoutes from './routes/rutaasignada.routes.js'
import clienteMedxtrabajadorRoutes from './routes/clientesMedxtrabajador.routes.js'

//definir modulo de ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();
const corsOptions={
    origin:'*',//la direccion ip/dominio del servidor
    methods:['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials:true
}

app.set('json spaces', 2); // Define la sangría para JSON en modo de desarrollo

app.use(cors(corsOptions))
app.use(express.json());//para que interprete los objetos json
app.use(express.urlencoded({extended:true}));  //se añade para poder receptar formularios
//app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')));
//app.use('/uploads', express.static(path.resolve('uploads')));
//rutas
app.use('/api',clientesRoutes)
app.use('/api',usuariosRoutes)
app.use('/api',productosRoutes)
app.use('/api',pedidosRoutes)
app.use('/api',pedidos_detalleRoutes)

app.use('/api',clientesMedRoutes)
app.use('/api',trabajadoresRoutes)
app.use('/api',consumosRoutes)
app.use('/api',medidoresRoutes)
app.use('/api',rutaasignadaRoutes)
app.use('/api',clienteMedxtrabajadorRoutes)

app.use((req,res,next)=>{
    res.status(400).json({
        message: 'Endpoint not found'
    })
})
export default app;