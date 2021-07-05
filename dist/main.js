"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestos = new _impuestos["default"](400, 200);
var Juanito = new _cliente["default"]("Juanito", impuestos);
console.log(Juanito);
Juanito.calcularImpuesto();