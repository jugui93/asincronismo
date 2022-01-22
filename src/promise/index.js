const somethingWillHappen = () => { // Creo una función que me retorna la promesa
    return new Promise((resolve, reject) => { //primer argumento si se ejecuta, el segundo si es rechazado
        if (false) {
            resolve( 'Hey!');
        }else{
            reject('Whoops!');
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        }else{
            const error = new Error('Whoop!');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//correr varias promesas y obtener un arreglo con el resltado de cada ejecución. 
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    });