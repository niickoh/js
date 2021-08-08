

// DECLARACIÓN DE FUNCIÓN

function sumar() {
    console.log(10+10);
}
sumar();

// EXPRESIÓN DE LA FUNCIÓN

const sumar2 = function() {
    console.log(3+3);
}
sumar2();

/**
 * Diferencia entre estas dos notaciones de función
 * 
 * la primera va a permitir llamar a la función incluso antes de crearla
 * esto porque js se ejecuta en 2 etapas
 * en la primera etapa registra todas las funciones
 * y en una segunda etapa haría los llamados a esas funciones
 * 
 * esto es mejor conocido como hosting
 * 
 * la segunda notación es una función, pero directamente es una variable
 * si se llama primero a la función dará error ya que al ser una variable
 * no se ejecutará en la primera etapa
*/

// IIFE

(function() {
    console.log('Esta es una función IIFE');
})();



const numero1 = 20;
const numero2 = '20';

console.log( parseInt(numero2)); // esto es una función
console.log(numero1.toString()); // esto es un método