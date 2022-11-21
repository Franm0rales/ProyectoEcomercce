let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
app.get("/", function (request, response) {
  response.send("Bienvenido a mi ecommerce");
});
app.get("/ProductosDestacados", function (request, response) {
  const productoUno = {
    nombre: "portatil Acer",
    stock: 100,
    precio: 1499.99,
  };
  const productoDos = {
    nombre: "portatil Msi",
    stock: 100,
    precio: 1499.99,
  };
  const productoTres = {
    nombre: "portatil Msi",
    stock: 100,
    precio: 1499.99,
  };
  const productoCuatro = {
    nombre: "portatil Msi",
    stock: 100,
    precio: 1499.99,
  };
  let productos = [productoUno, productoDos, productoTres, productoCuatro];
  response.send(productos);
});
app.listen(8000, function () {
  console.log("API lista para recibir llamadas");
});
