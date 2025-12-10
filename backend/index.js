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
    let contenido = fs.readFileSync("../data/obras.json","utf-8");
    return JSON.parse (contenido)
}

