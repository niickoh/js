
// métodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con ID: ${id}`);
    },
    pausar : function() {
        console.log('Pausando...');
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproduciendoPlaylist : function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    },
}

reproductor.eliminarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(25);
reproductor.pausar();
reproductor.eliminarCancion(13);
reproductor.crearPlaylist('Estopa');
reproductor.reproduciendoPlaylist('Estopa');