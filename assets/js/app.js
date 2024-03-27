document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.getElementById('contacto').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var nombre = document.getElementById('nombre').value.trim();
  var email = document.getElementById('asunto').value.trim();
  var mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos.');
      return; 
  }

  alert('Formulario enviado correctamente!');

  document.getElementById('nombre').value = '';
  document.getElementById('asunto').value = '';
  document.getElementById('mensaje').value = '';
});