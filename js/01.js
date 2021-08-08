// VARIABLES
/** Anterior a ES6*/
var producto = 'Audifonos Gamer';

let producto1 = 'Audifonos Gamer let';

const producto2 = 'Audifonos Gamer const';

/*console.log(producto);
console.log(producto1);
console.log(producto2);


/**String */

const palabra = 'Monitor de 20 pulgadas';
const palabra2 = 'Monitor HD';

/*console.log(palabra);
console.log(palabra2);


/** Concatenación */

const nombre = 'Nicolas';
const correo = 'nicolas@gmail.com';

/*console.log('Nombre Cliente: ' + nombre + ' ' + ' Correo: ' + correo);


/**Template Strings */

//console.log(`Nombre Cliente: ${nombre} Correo: ${correo}`);

// Objetos

const productoObjeto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio : 3000,
    disponible : true
};

console.log(productoObjeto);
/** Existen 2 tipos de sintaxis para llamar a la propiedad del objeto */
// 1
console.log(productoObjeto.nombreProducto);
// 2 da igual si es con comilla simple o doble
console.log(productoObjeto['precio']);

// Agregar nuevas propiedades
productoObjeto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete productoObjeto.disponible;

// Asignando a una variable el valor de la propiedad
// del objeto
// la variable se crea manualmente y se le asigna el valor con
// la propiedad del objeto creado
const precioProducto = productoObjeto.precio;

console.log(precioProducto);

// Destructuring
/** Se crea la variable y se asigna valor en un solo paso*/
const {precio, nombreProducto} = productoObjeto;

console.log(precio);
console.log(nombreProducto);

