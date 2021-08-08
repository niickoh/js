"user strict"; // Ejecuta JS en modo estricto

const productoObjeto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio : 3000,
    disponible : true
};


/**Congela el objeto creado y no se le pueden
 * agregar, modificar y eliminar más propiedades 
 * 
 * Minetras que Object.seal, solamente te deja modificar propíedades del
 * objeto */
Object.freeze(productoObjeto);

productoObjeto.imagen = 'img.jpg';

console.log(productoObjeto)