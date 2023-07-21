// Redimensiona las imágenes al tamaño adecuado para el slider
function resizeImages() {
    var slider = document.getElementById("slider");
    var images = slider.getElementsByClassName("carousel-item");

    for (var i = 0; i < images.length; i++) {
        var image = images[i].getElementsByTagName("img")[0];
        var containerHeight = slider.offsetHeight;
        var imageAspectRatio = image.naturalWidth / image.naturalHeight;
        var imageHeight = containerHeight;

        if (imageAspectRatio > 1) {
            // Si la imagen es más ancha que alta, ajustamos el alto basado en el ancho
            imageHeight = slider.offsetWidth / imageAspectRatio;
        }

        image.style.width = "100%";
        image.style.height = "auto";
    }
}

// Llama a la función resizeImages cuando la página se carga y se redimensiona
window.addEventListener("load", resizeImages);
window.addEventListener("resize", resizeImages);
