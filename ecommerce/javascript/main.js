function agregarCarrito() {
  let carritoSumar = document.getElementById("carritoSumar");
  let cantidad = parseInt(carritoSumar.innerHTML);
  carritoSumar.innerHTML = `${++cantidad}`;
}
function iniciarSesion() {
  const usuario = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let emailError = document.getElementById("emailError");
  let errorPassword = document.getElementById("errorPassword");
  if (usuario == "picassomorales@gmail.com" && password == "12345678") {
    emailError.innerHTML = "<span>bienvenido</span>";
    errorPassword.innerHTML = "<span>Bienvenido</span>";
  } else {
    emailError.innerHTML = "<span>Error!!</span>";
    errorPassword.innerHTML = "<span>Error!!</span>";
  }
}
function productos() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("productos");
      let htmlContent = "";
      for (i = 0; i < response.length; i++) {
        htmlContent += `<article class=" wrap card">
        <div class="figure">
        <div class="card-content">
          <figure>
              <img src="${response[i].picture}" alt="Portatil" width="200px" height="150px" >
          </figure></div>
      
          <div class="figurecard">
        <div class="contentproducto">
            <div class="tituloarticulo">
              <h4>${response[i].nombre}</h4></div>
              <div class="precio">
                <span><b>${response[i].precio}</b></span></div>
                <div class="divisa">
                <span>€</span></div>
                <div class="rating">
                  <span class="filled">★</span>
                  <span class="filled">★</span>
                  <span class="filled">★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              <h6>Consigue ahora los mejores productos de Computer Low Cost </h6>
      
              <div class="carrito">
                <a onclick="agregarCarrito()" class ="buttonenlace">
                
                <span> 🛒 Carrito</span></a></div>
              <a href="todoslosproductos.html?id=${response[i].id}" class="buttonenlace">Ver</a>
          </div>
          </div>
        </div>`;
      }
      userDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", "http://localhost:8000/ProductosDestacados", true);
  request.send();
}
function ofertas() {
  const request = new XMLHttpRequest();
  let userId = new URLSearchParams(window.location.search).get("id");
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("ofertas");
      let htmlContent = "";

      htmlContent += `<article class=" wrap card">
        <div class="figure">
        <div class="card-content">
          <figure>
              <img src="${response.picture}" alt="Portatil" width="300px" height="250px" >
          </figure></div>
      
          <div class="figurecard">
        <div class="contentproducto">
            <div class="tituloarticulo">
              <h4>${response.nombre}</h4></div>
              <div class="precio">
                <span><b>${response.precio}</b></span></div>
                <div class="divisa">
                <span>€</span></div>
                <div class="rating">
                  <span class="filled">★</span>
                  <span class="filled">★</span>
                  <span class="filled">★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              <h4>${response.descripcion}</h4>
              <h4>${response.Especificaciones}</h4>
      
              <div class="carrito">
                <a onclick="agregarCarrito()" class ="buttonenlace">
                
                <span> 🛒 Carrito</span></a></div>
              <a onclick="ofertas()" href="todoslosproductos.html" class="buttonenlace">Ver</a>
          </div>
          </div>
        </div>`;
      userDiv.innerHTML = htmlContent;
    }
  };

  request.open("GET", `http://localhost:8000/detalles/${userId}`, true);
  request.send();
}
