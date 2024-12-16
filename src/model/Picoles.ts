import ISorvete from "./ISorvete";

export default class Picoles implements ISorvete{
    tipo: "Picolé";
    valor: number = 1.5;

    public constructor(tipo: "Picolé") {
        this.tipo = tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }
}