import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs";

subscribeGETEvent ("obras", hola)

function hola() {  
    let contenido = fs.readFileSync("../data/obras.json","utf-8");
    return JSON.parse(contenido);
} 

startServer();

subscribeGETEvent ("colección", coleccions)
function coleccions () {
    let contenido = fs.readFileSync("../data/idcoleccion.json","utf-8");
    return JSON.parse (contenido)
}

subscribePOSTEvent  ("modificarColección", numero)

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

  

    return ;
}


