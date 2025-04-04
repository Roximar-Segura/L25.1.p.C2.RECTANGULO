export default class CL_Cuadrado {
    constructor(base) {
        this.base = base;
    }
    area() {
        return this.base * this.base;
    }

    perimetro() {
        return this.base * 4;
    }
}