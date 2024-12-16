export default class Endereco {
    private rua!: string;
    private bairro!: string;
    private numero!: number;
    private cep!: number;

    public constructor() {

    }

    public getRua(): string {
        return this.rua;
    }

    public setRua(rua: string): void {
        this.rua = rua;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getCep(): number {
        return this.cep;
    }

    public setCep(cep: number): void {
        this.cep = cep;
    }
}