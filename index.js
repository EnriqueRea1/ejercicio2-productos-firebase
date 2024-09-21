const express = require("express");
const productosRutas = require("./rutas/rutasProductos");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/", productosRutas);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
})