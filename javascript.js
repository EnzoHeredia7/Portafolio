function cerrarBarra() {
    let botonToggle = document.querySelector('.navbar-toggler');
    if (botonToggle.getAttribute('aria-expanded') === 'true') {
      botonToggle.click();
    }
  }
  function mostrarCertificado() {
    document.getElementById('certificadoContenedor1').style.display = 'flex';
  }
  
  function ocultarCertificado() {
    document.getElementById('certificadoContenedor1').style.display = 'none';
  }
  