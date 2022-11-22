let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
app.get("/", function (request, response) {
  response.send("Bienvenido a mi ecommerce");
});
app.get("/ProductosDestacados", function (request, response) {
  const productoUno = {
    picture:"/ecommerce/imagenlogo/acer.jpg",
    nombre: "Portatil Acer",
    stock: 100,
    precio: 1499.99,
  };
  const productoDos = {
    nombre: "Portatil Msi",
    picture:"/ecommerce/imagenlogo/msi1.jpg",
    stock: 100,
    precio: 1499.99,
  };
  const productoTres = {
    nombre: "Portatil Msi",
    picture:"/ecommerce/imagenlogo/msi1.jpg",
    stock: 100,
    precio: 1499.99,
  };
  const productoCuatro = {
    picture:"/ecommerce/imagenlogo/acer.jpg",
    nombre: "Portatil Acer",
    stock: 100,
    precio: 1499.99,
  };
  let productos = [productoUno, productoDos, productoTres, productoCuatro];
  response.send(productos);
});
app.get("/ofertas", function (request, response){
  const ofertaUno = {
    nombre: "Portatil Acer",
    picture:"/ecommerce/imagenlogo/acer.jpg",
    stock: 100,
    precio: 1499.99,
    descripcion:"Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
    Especificaciones:"Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)"
    
  
  };
  const ofertaDos = {
    nombre: "Portatil Msi",
    picture:"/ecommerce/imagenlogo/msi1.jpg",
    stock: 100,
    precio: 1499.99,
    descripcion:"Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
    Especificaciones:"Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)"
    
  
  };
  const ofertaTres = {
    nombre: "Portatil Msi",
    picture:"/ecommerce/imagenlogo/msi1.jpg",
    stock: 100,
    precio: 1499.99,
    descripcion:"Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
    Especificaciones:"Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)"
    
  
  };
  const ofertaCuatro = {
    nombre: "Portatil Acer",
    picture:"/ecommerce/imagenlogo/acer.jpg",
    stock: 100,
    precio: 1499.99,
    descripcion:"Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
    Especificaciones:"Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)"
    
  
  };
  let ofertas = [ofertaUno, ofertaDos, ofertaTres,ofertaCuatro];
  response.send(ofertas);

});

app.listen(8000, function () {
  console.log("API lista para recibir llamadas");
});
