import routerx from "express-promise-router";

//Importamos el controladores, que tendra los endpoint
import Productos from "../controllers/ProductoController";

//Hacemos una instancia a la libreria 
const router = routerx();


//En esta parte ira como rutas los endpoint eje('/agregar', '/editar')
router.use("/agregar", Productos.agregarProducto);
router.use("/listar/:id", Productos.listarProducto);
router.use("/listado", Productos.listarProductos);
router.use("/editar", Productos.actualizarProducto);
router.use("/eliminar/:id", Productos.eliminarProducto);


//Exportamos el enrutador 
export default router;
