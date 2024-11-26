  // Función para abrir el modal
  function openModal() {
    document.getElementById('videoModal').style.display = 'flex';
  }

  // Función para cerrar el modal
  function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
  }

  // Cerrar el modal si se hace clic fuera del contenido
  window.onclick = function(event) {
    if (event.target == document.getElementById('videoModal')) {
      closeModal();
    }
  }

