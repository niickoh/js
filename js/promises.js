


const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario autenticado'); // EL PROMISE SE CUMPLE
    }else{
        reject('No se pude iniciar sesión'); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// En los promises existen 3 valores posibles

/**
 * Pending: no se ha cumplido pero tampoco se ha rechazada
 * Fulfilled: ya se cumplio
 * Rejected: rechazado o no se pudo cumplir
 */