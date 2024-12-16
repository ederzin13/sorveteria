import Client from "./Cliente";

export default class Carrinho {
    private static quantos: number = 3;
    private capacidade!: number;
    private nome!: string; //identificador de cada carrinho
    private clienteResp!: Client;

    public constructor() {
        if (this.isDisponivel()) Carrinho.quantos--;
    }

    public getQuantos(): number {
        return Carrinho.quantos;
    }

    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(capacidade: number): void {
        this.capacidade = capacidade;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCliResp(): object {
        return this.clienteResp;
    }

    public setCliResp(clienteResp: Client): void {
        this.clienteResp = clienteResp;
    }

    private isDisponivel(): boolean{
        if (Carrinho.quantos == 0) {
            console.log("Carrinhos indisponíveis");
            return false;
        }
        else {
            console.log("Carrinho disponível!");
        } return true;
    }
}
