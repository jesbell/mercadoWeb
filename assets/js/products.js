//console.log("HOLAAAAA");
const imagenes = document.querySelectorAll('.producto img');
let carritoCompra = [];

// Función de acción del clic en una imagen
function eventoClick(event) {
    const imagen = event.target; // Obtener la imagen seleccionada
    const nameImagen = imagen.alt; // Obtener nombre de la imagen
    if (imagen.classList.contains('selected')) {
        // si magen ya seleccionada, quitar de arreglo
        const index = carritoCompra.indexOf(nameImagen);
        if (index !== -1) {
            carritoCompra.splice(index, 1);
        }
    } else {
        // Si imagen no está seleccionada, agrega a carrito
        carritoCompra.push(nameImagen);
    }
    imagen.classList.toggle('selected');
    //console.log(carritoCompra);
}

// Asignar el evento de clic a todas las imágenes
imagenes.forEach(imagen => {
    imagen.addEventListener('click', eventoClick);
});

$("#btncarrito").on( "click", function() {
    $('#exampleModal').modal('show');
    $('#carritoContenido').empty();
    carritoCompra.forEach(function(item) {
        $('#carritoContenido').append('<li>' + item + '</li>');
    });
});