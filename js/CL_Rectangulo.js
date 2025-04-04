import CL_Cuadrado from "CL_Cuadrado.js" ;
export default class Cl_Rectangulo extends CL_Cuadrado {
    constructor(base, altura) {
        super(base);
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
    perimetro() {
        return 2 * this.base + 2 * this.altura;
    }
}