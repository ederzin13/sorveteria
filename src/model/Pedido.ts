import Cliente from "./Cliente";
import Pagamento from "./Pagamento";
import Endereco from "./Endereco";

export default class Pedido {
    private id!: number;
    private cliente!: Cliente;
    private items!: number; 
    private quantItens!: number;
    private formaPagamento!: Pagamento;
    private endereco!: Endereco;
    private data!: Date;
    private horario!: number;
    private subTotal!: number;
    private valorTotal!: number;

    public constructor() {
        if (this.temDesconto()) {
            this.subTotal = this.subTotal - this.aplicaDesconto();
        }
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCliente(): object {
        return this.cliente;
    }

    public setCliente(cliente: Cliente): void {
        this.cliente = cliente;
    }

    public getQuant(): number {
        return this.quantItens;
    }

    public setQuant(quantidade: number): void {
        this.quantItens = quantidade;
    }

    public getForma(): object {
        return this.formaPagamento;
    }

    public setForma(forma: Pagamento): void {
        this.formaPagamento = forma;
    }

    public getEndereco(): object {
        return this.endereco;
    }

    public setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public getHorario(): number {
        return this.horario;
    }

    public setHorario(horario: number): void {
        this.horario = horario;
    }

    public getSubTotal(): number {
        return this.subTotal;
    }

    public setSubTotal(subTotal: number): void {
        this.subTotal = subTotal;
    }

    public getTotal(): number {
        return this.valorTotal;
    }

    public setTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

    public temDesconto(): boolean {
        if (this.getQuant() >= 100) return true;
        else return false;
    }

    public aplicaDesconto(): number {
        let desconto: number = this.quantItens * 0.2;
        return desconto;
    }
}