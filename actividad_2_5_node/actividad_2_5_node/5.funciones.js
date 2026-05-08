// Funcion calcular IVA

function calcularIVA(precio){
    return precio *0.19;
}

let precioProducto = 10000;
let iva = calcularIVA(precioProducto);

console.log("Precio:",precioProducto);
console.log("IVA:",iva);
console.log("Total",precioProducto + iva);