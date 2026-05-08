// Importar módulo

const { convertirDolarAPeso } = require('./modulos/calculadora');

let dolares = 10;
let pesos = convertirDolarAPeso(dolares);

console.log(`${dolares} dólares son ${pesos} pesos chilenos`);