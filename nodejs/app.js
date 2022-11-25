let express = require("express");
let cors = require("cors");
let mysql = require("mysql");
let app = express();
app.use(cors());
app.use(express.json());
/**
 * Constantes
 */
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
const usuarioUno = {
  email: "picassomorales@gmail.com",
  password: "1234",
};
const usuarioDos = {
  email: "picasso@gmail.com",
  password: "1234",
};
const usuarios = [usuarioUno, usuarioDos];
/**
 * mysql
 */
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ecommerce",
});
app.get("/ProductosDestacados", function (request, response) {
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
    "select * from productos",
    [],
    function (error, results, fields) {
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        return;
      }

      response.send(results);
    }
  );
  connection.end(function (error) {
    if (error) {
      console.log(`No se ha podido cerrar la conexion:${error}`);
      return;
    }
    console.log("Conexion cerrada a MySQL");
  });
});
app.get("/detalles/:id", function (request, response) {

  const productoId = request.params.id;
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
    "select * from productos where id=?",
    [productoId],
    function (error, results, fields) {
      console.log(results);
      
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        return;
      }
      
      response.send(results);
    }
  );
});
/**
 * Servicio API
 */
app.get("/", function (request, response) {
  response.send("Bienvenido a mi ecommerce");
});


app.post("/login", function (request, response) {
  const email = request.body.email;
  const password = request.body.password;
  console.log(email, password);
  for (let usuario of usuarios) {
    if (email === usuario.email && password === usuario.password) {
      response.status(200).send();
    }
  }
  response.status(401).send();
});

app.listen(8000, function () {
  console.log("API lista para recibir llamadas");
});
