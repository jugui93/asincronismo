// Instanciar o requerir en nuestro documento el xmlhttpReques( Objeto para solicitar información de un servidor web)
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'
//Crear función fetchData, recibe la API y una función callback
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();//instancia xhttp
    xhttp.open('GET', url_api, true);//Abrir conexión por medio de 'GET', API, true para activar asincronismo
    xhttp.onreadystatechange = function (event) {//validación de que se este realizando el llamado
        if(xhttp.readyState === 4){
            if (xhttp.status === 200) {
            callback (null, JSON.parse(xhttp.responseText))
        } else {
            const error = new Error('Error ' + url_api);
            return callback(error, null)
        } 
    }
    }
    xhttp.send(); //enviamos la petición
}

fetchData(API, function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.error (error3);
            console.log (data1.info.count);
            console.log (data2.name);
            console.log (data3.dimension);

            // rutas de las peticiones en orden
            console.log(API);
            console.log(API + data1.results[0].id); 
            console.log(data2.origin.url); 
        })
    })
})