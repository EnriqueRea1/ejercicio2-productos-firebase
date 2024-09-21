var rutas = require("express").Router();
// var {Router} = require("express");

var {mostrarProductos, nuevoProducto, borrarProducto, buscarPorID} = require("../bd/productosBD");

rutas.get("/",async(req, res)=>{
    var productosValidos = await mostrarProductos();
    // console.log(usuariosValidos);
    res.json(productosValidos);
    // res.send("Hola estas en raíz");
});

rutas.get("/buscarProductoPorId/:id",async(req,res)=>{
    var productoValido = await buscarPorID(req.params.id);
    res.json(productoValido);
});

rutas.get("/borrarProducto/:id",async(req,res)=>{
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto",async(req,res)=>{
    var productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});

module.exports = rutas;