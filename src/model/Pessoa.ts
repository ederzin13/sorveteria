import Client from "./Cliente";
import Endereco from "./Endereco";

export default class Pessoa extends Client {
    private cpf!: number | undefined;

    public constructor(nome?: string, phone?: number, cpf?: number) {
        super(nome, phone);
        this.cpf = cpf;
    }

    public getCpf(): number | undefined {
        return this.cpf;
    }

    public setCpf(cpf: number): void {
        this.cpf = cpf;
    }

    encomenda(quantSorvetes: number): void {
        console.log(`Cliente ${this.name} encomendou ${quantSorvetes} sorvetes!`);
    }
}