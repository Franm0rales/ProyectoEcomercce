let express = require("express");
let cors = require("cors");
let app = express();
const productoUno = {
  id: 1,
  picture: "/imagenlogo/acer.jpg",
  nombre: "PortatilAcer",
  stock: 100,
  precio: 1499.99,
  descripcion:
    "Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
  Especificaciones:
    "Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)",
};
const productoDos = {
  id: 2,
  nombre: "PortatilMsi",
  picture: "/imagenlogo/msi1.jpg",
  stock: 100,
  precio: 1499.99,
  descripcion:
    "Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
  Especificaciones:
    "Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)",
};
const productoTres = {
  id: 3,
  nombre: "PortatilMsi",
  picture: "/imagenlogo/msi1.jpg",
  stock: 100,
  precio: 1499.99,
  descripcion:
    "Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
  Especificaciones:
    "Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)",
};
const productoCuatro = {
  id: 4,
  picture: "/imagenlogo/acer.jpg",
  nombre: "PortatilAcer",
  stock: 100,
  precio: 1499.99,
  descripcion:
    "Acelere a fondo con la computadora portátil para juegos Acer Nitro 5 AMD Ryzen™ Serie 6000 en modelos de 15 o 17 pulgadas,ya sea que la use como computadora portátil para juegos casuales o para subir de nivel en línea.",
  Especificaciones:
    "Procesador AMD Ryzen™ 7 6800H 3.2 GHz Memoria 16 GB DDR5 Memory Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4) Almacenamiento 512GB PCIe NVMe SED SSD Unidad óptica NO Display 15.6 FHD IPS 144Hz SlimBezel 16:9 Controlador gráfico NVIDIA® GeForce RTX™ 3050 4G-GDDR6(2C*256*16*4)",
};
let productos = [productoUno, productoDos, productoTres, productoCuatro];
app.use(cors());

app.get("/", function (request, response) {
  response.send("Bienvenido a mi ecommerce");
});
app.get("/ProductosDestacados", function (request, response) {
  response.send(productos);
});
app.get("/detalles/:id", function (request, response) {
  const productoId = request.params.id;
  for (i of productos) {
    if (i.id == productoId) {
      response.send(i);
    }
  }
});

app.listen(8000, function () {
  console.log("API lista para recibir llamadas");
});
