// Instanciar o requerir en nuestro documento el xmlhttpReques( Objeto para solicitar información de un servidor web)
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Crear función fetchData, recibe la API y una función callback
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();//instancia xhttp
        xhttp.open('GET', url_api, true);//Abrir conexión por medio de 'GET', API, true para activar asincronismo
        xhttp.onreadystatechange = (() => {//validación de que se este realizando el llamado
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))
        }
        });
        xhttp.send(); //enviamos la petición

    });
    
}

module.exports = fetchData;