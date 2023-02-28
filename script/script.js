function resaltar(elemento) {
    elemento.style.backgroundColor = "yellow";
  }
  
  function quitarResaltado(elemento) {
    elemento.style.backgroundColor = "";
  }

  window.onload = function() {
    var contenedorImagen = document.getElementById("Imagen_Titulo");
    var infoImagen = document.getElementById("imagendato");
    
    contenedorImagen.addEventListener("mousemove", function(event) {
      var x = event.clientX - contenedorImagen.offsetLeft;
      var y = event.clientY - contenedorImagen.offsetTop;
      
      infoImagen.style.left = x + "px";
      infoImagen.style.top = y + "px";
    });
  };