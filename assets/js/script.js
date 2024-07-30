(function () {
  "use strict";

  const detallesFicha = document.querySelector("#creacionFicha");

  detallesFicha.addEventListener("submit", creaFicha);

  function creaFicha(event) {
    event.preventDefault();

    const tituloLibro = event.target.elements["titulo"].value;
    const autorLibro = event.target.elements["autor"].value;
    const portadaLibro = event.target.elements["portada"].value;
    const descripcionLibro = event.target.elements["descripcion"].value;

    for (let i = 0; i < detallesFicha.length; i++) {
      detallesFicha.elements[i].value = "";
    }
    const fichaLibro = creaFichaLibro(tituloLibro, autorLibro, portadaLibro, descripcionLibro);

    const listaFavorita = document.querySelector("#destination_container");
    if (listaFavorita.children.length === 0) {
      document.querySelector("#tituloColumna").innerHTML = "Mis Favoritos";
    }
    document.querySelector("#destination_container").appendChild(fichaLibro);
  }

  function creaFichaLibro(titulo, autor, portada, descripcion) {

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", titulo);

    const fotoDefault = "assets/img/libro.jpg";

    if (portada.length === 0) {
      img.setAttribute("src", fotoDefault);
    }
    else {
      img.setAttribute("src", portada);
    }
    card.appendChild(img);

    const cuerpoFicha = document.createElement("div");
    cuerpoFicha.className = "cuerpo_ficha";

    const tituloFicha = document.createElement("h3");
    tituloFicha.innerText = titulo;
    cuerpoFicha.appendChild(tituloFicha);
    const subtituloFicha = document.createElement("h4");
    subtituloFicha.innerText = autor;
    cuerpoFicha.appendChild(subtituloFicha);

    if (descripcion.length !== 0) {
      const textoFicha = document.createElement("p");
      textoFicha.className = "texto_ficha";
      textoFicha.innerText = descripcion;
      cuerpoFicha.appendChild(textoFicha);

      const botonBorrar = document.createElement("button");
      botonBorrar.innerText = "Borrar";
      botonBorrar.addEventListener("click", borrarFicha);
      cuerpoFicha.appendChild(botonBorrar);

      card.appendChild(cuerpoFicha);

      return card;
    }

    function borrarFicha(event) {
      const card = event.target.parentElement.parentElement;
      card.remove();
    }

  }
})();