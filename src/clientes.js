export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get impuesto() {
        return this._impuesto;
    }

    set impuesto(nuevoImpuesto) {
        this._impuesto = nuevoImpuesto;
    }

    calcularImpuestoTotal() {
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }
}

