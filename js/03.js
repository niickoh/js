const productoObjeto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio : 3000,
    disponible : true
};

const medidas = {
    peso : '1kg',
    medida : '1m'
}

/**Spred Operator
 * sirve para unir 2 objetos
 */
const nuevoProducto = { ...productoObjeto, ...medidas};

console.log(productoObjeto);
console.log(nuevoProducto);