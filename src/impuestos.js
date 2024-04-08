export class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }

    
}


// let montitoAnual = new Impuesto ("1500", "");
// console.log(`monto bruto anual: `+ montitoAnual.montoBrutoAnual);

// let deduccionesAnual = new Impuesto("","234");
// console.log(`monto deducciones: ` + deduccionesAnual.deducciones);

