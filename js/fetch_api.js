// function obtenerEmpleados() {

//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then( resultado => resultado.json())
//         .then( datos => {
//             // console.log(datos.empleados)

//             const {empleados} = datos;


//             empleados.forEach(empleado => {
//                 console.log(empleado.id)
//                 console.log(empleado.nombre)
//                 console.log(empleado.puesto)
                
//                 /**impresion de resultado en contenido html */
//                 document.querySelector('.contenido').textContent = empleado.id;
//             }) 
//         })
// }

// obtenerEmpleados()


async function obtenerEmpleados() {

    const archivo = 'empleados.json';
    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then( datos => {
    //         // console.log(datos.empleados)

    //         const { empleados } = datos;
    //         console.log(empleados);

            
    //     });

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados()