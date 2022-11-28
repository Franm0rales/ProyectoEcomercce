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

app.post("/login", function (request, response) {
  const Email = request.body.Email;
  const password = request.body.password;
  console.log(Email, password);
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
    "select * from usuario where Email=? and password=?",
    [Email, password],
    function (error, results, fields) {
      console.log(results);
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        return;
      }
      if (results.length > 0) {
        response.status(200).send();
      } else {
        response.status(401).send();
      }
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
app.post("/registro", function (request, response) {
  const Nombre = request.body.Nombre;
  const Apellidos = request.body.Apellidos;
  const telefono = request.body.telefono;
  const Email = request.body.Email;
  const password = request.body.password;
  console.log(Email, password, Nombre, Apellidos);
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
    "insert into usuario (Email,password,telefono,Nombre,Apellidos)values(?,?,?,?,?)",
    [Email, password, "", Nombre, Apellidos],
    function (error, results, fields) {
      console.log(results);
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        response.status(400).send();
      }
      response.send(results);
    }
  );
});
app.get("/productosCarrito/:id", function (request, response) {
  const productoId = request.params.id;
  console.log(productoId);
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
   
    "SELECT id,precio,nombre FROM productos where id=?",
    [productoId], 
    function (error, results, fields) {
      
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        return;
        
      }
      connection.query(
        `insert into carritodetalle(producto,precio,cantidad,nombre,usuario)
        values(${results[0].id},${results[0].precio},${1},"${results[0].nombre}",${1})`,
      )
      response.send(results);
    
    }
  );
});
app.get("/carrito/:usuario", function (request, response) {
  const usuarioId = request.params.usuario;
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
   
    "SELECT * FROM carritodetalle where usuario=? ",
    [usuarioId], 
    function (error, results, fields) {
      
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        return;
        
      }

      response.send(results);
    
    }
  );
});
app.get("/pedido/:usuario", function (request, response) {
  const productoId = request.params.id;
  console.log(productoId);
  connection.connect(function (error) {
    if (error) {
      console.log(`No es posible conectarse al servidor:${error}`);
      return;
    }
    console.log("Conectado  a MySQL");
  });
  connection.query(
   
    "SELECT usuario,sum(precio)as total FROM ecommerce.carritodetalle",
    [], 
    function (error, results, fields) {
      
      if (error) {
        console.log(`Se ha producido un error al ejecutar la query: ${error}`);
        return;
        
      }
      connection.query(
        `insert into pedido(usuario,total)
        values(${results[0].usuario},${results[0].total})`,
      )
      connection.query(
        "DELETE FROM carritodetalle WHERE usuario=1",
        [],
      )
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
app.listen(8000, function () {
  console.log("API lista para recibir llamadas");
});

