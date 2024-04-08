
import { Cliente } from "./clientes.js";
import { Impuesto } from "./impuestos.js";

// Crear un nuevo objeto Impuesto
const nuevoImpuesto = new Impuesto(8000, 200);

// Crear un nuevo cliente con el objeto Impuesto creado anteriormente
const clienteUno = new Cliente("Maria", nuevoImpuesto);

// Calcular el impuesto total para el cliente
const totalClienteUno = clienteUno.calcularImpuestoTotal();

console.log("Impuesto total a pagar por el cliente es:", totalClienteUno);