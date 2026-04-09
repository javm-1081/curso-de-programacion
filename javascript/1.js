// ejercicio 1
const Producto = "Tablet 10 pulgadas";
let precio = 450.99;
let stock = 25;
const envioGratis = true;

console.log(`Nombre del producto: ${Producto}`);
console.log(`Precio: ${precio}`);
console.log(`Cantidad en stock: ${stock}`);
console.log(`¿Tiene envío gratis?: ${envioGratis}`);

//ejercicio 2
let cantidadcomprada = 2;
let subtotal = precio * cantidadcomprada;
let impuesto = subtotal * 0.07;
let total = impuesto + subtotal;


console.log(`Total Final: ${total.toFixed(2)}`);