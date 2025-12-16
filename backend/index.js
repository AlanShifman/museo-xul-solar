import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; // importo las funciones de soquetic ( suscribe get event devuelve datos, susctibe post event los recibe)
import fs from "fs"; // importo los arhcivos

subscribeGETEvent ("obras", hola) // cuando el front end pida el evento obras ejecuto la funcion hola

function hola() {  
    let contenido = fs.readFileSync("../data/obras.json","utf-8");
    return JSON.parse(contenido); // lee el archivo con las obras en texto y lo devuelve como un array. data obras json es el archivo que leemos y utf-8 es para leerlo en texto y no en binario.
} 

startServer();

subscribeGETEvent ("colección", coleccions) // cuando el frontend pida el evento coleccion se ejecuta la funcion colleccions.
function coleccions () {
    let contenido = fs.readFileSync("../data/idcoleccion.json","utf-8"); 
    return JSON.parse (contenido)// lee el archivo que contiene los id y lo devuelve como un array al frontend.
}

subscribePOSTEvent  ("modificarColección", numero) // cuando el back recibe el evento modificar coleccion se ejecuta la funcion numero.
function numero (data) {

    if (data.enColección == true) {
        let contenido = JSON.parse(fs.readFileSync("../data/idcoleccion.json","utf-8"));
        
        contenido.push(data.id);

        let idcoleccionjson = JSON.stringify(contenido, null, 2);
        fs.writeFileSync("../data/idcoleccion.json", idcoleccionjson);

        return true;
    }
    else {
        let contenido = JSON.parse(fs.readFileSync("../data/idcoleccion.json","utf-8"));

        let resultado = contenido.filter(id => id !== data.id);
    
            let idcoleccionjson = JSON.stringify(resultado, null, 2);
            fs.writeFileSync("../data/idcoleccion.json", idcoleccionjson);
    


        return false;

    }
}

subscribeGETEvent("obrasColección", devolverColeccion);

function devolverColeccion() {
    let ids = JSON.parse(fs.readFileSync("../data/idcoleccion.json", "utf-8"));
    let obras = JSON.parse(fs.readFileSync("../data/obras.json", "utf-8"));
    let obrasEnColeccion = [];
    
    for (let i = 0; i < obras.length; i++) {
        if (ids.includes(obras[i].id)) {
            obrasEnColeccion.push(obras[i])
        }
    }

    return obrasEnColeccion;
}


