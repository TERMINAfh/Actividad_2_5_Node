// Uso del módulo fs

const fs = require('fs');

let contenido = "Resultado de la actividad Node.js";

// Escribir archivo
fs.writeFileSync('./archivos/resultado.txt', contenido);

console.log("Archivo creado correctamente");

// Leer archivo
let datos = fs.readFileSync('./archivos/resultado.txt', 'utf8');

console.log("Contenido del archivo:");
console.log(datos);