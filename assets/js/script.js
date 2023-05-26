const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function() {
  $('#enviarCorreo').click(function() {
    alert('El correo fue enviado correctamente...');
  });

  $('#receta h4').on('dblclick', function() {
    $(this).css({
      'color': 'red'
    })
  });

  $('#recetas-relacionadas h5').on('click', function() {
    $('p').toggle(250);
  });
});
