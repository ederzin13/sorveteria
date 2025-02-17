import ISorvete from "./ISorvete";
import ISorveteGen from "./ISorveteGen";

export default class Picoles implements ISorveteGen<string>{
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