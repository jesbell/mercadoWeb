//console.log("HOLAAAAA");
const imagenes = document.querySelectorAll('.producto img');
let carritoCompra = [];

// Función de acción del clic en una imagen
function eventoClick(event) {
    const imagen = event.target; // Obtiene la imagen seleccionada
    const nameImagen = imagen.alt; // Obtener nombre de la imagen
    if (imagen.classList.contains('selected')) {
        // Si la imagen ya seleccionada, quitar de arreglo
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

// Asigna el evento de clic a todas las imágenes y llama a la función eventoClick
imagenes.forEach(imagen => {
    imagen.addEventListener('click', eventoClick);
});

// Muestra y agrega la información al Modal
$("#btncarrito").on( "click", function() {
    $('#exampleModal').modal('show');
    $('#carritoContenido').empty();
    var container = $('<div class="d-flex flex-wrap justify-content-center"></div>'); // flexible
    carritoCompra.forEach(function(p) {
        container.append('<div class="producto"><img src="img/' + p + '.png" alt="' + p + '"></div>');
    });
    $('#carritoContenido').append(container);
});