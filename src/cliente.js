export default class Cliente {
    constructor (nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre () {
        return this._nombre
    }
    set nombre (nuevoNombre) {
        this._nombre = nuevoNombre
    }
    
    calcularImpuesto() {
        const resultado = 
        (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
        return resultado
    }
}


