import ISorvete from "./ISorvete";
import ISorveteGen from "./ISorveteGen";

export default class Picoles implements ISorveteGen<string, number>{
    tipo: "Picolé";
    sabor: "Morango";
    quantidade: string = "2";
    valor: number = 1.5;

    public constructor(tipo: "Picolé", sabor: "Morango") {
        this.tipo = tipo;
        this.sabor = sabor;
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