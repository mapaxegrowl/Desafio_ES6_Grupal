"use strict";

var _clientes = require("./clientes.js");
var _impuestos = require("./impuestos.js");
// Crear un nuevo objeto Impuesto
var nuevoImpuesto = new _impuestos.Impuesto(8000, 200);

// Crear un nuevo cliente con el objeto Impuesto creado anteriormente
var clienteUno = new _clientes.Cliente("Maria", nuevoImpuesto);

// Calcular el impuesto total para el cliente
var totalClienteUno = clienteUno.calcularImpuestoTotal();
console.log("Impuesto total a pagar por el cliente es:", totalClienteUno);
