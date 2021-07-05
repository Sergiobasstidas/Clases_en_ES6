import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

const impuestos = new Impuestos(400, 200);
const c1 = new Cliente(`NN`, impuestos);
console.log(c1.calcularImpuesto());
