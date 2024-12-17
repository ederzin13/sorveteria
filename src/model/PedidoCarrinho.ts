import Pedido from "./Pedido";

export default class PedidoCarrinho extends Pedido {
    private temEntrega!: boolean;
    private readonly FRETE: number = 40; //

    public somaFrete(): number {
        let total: number = this.getSubTotal() + this.FRETE;
        return total;
    }

    public temDesconto(): boolean {
        if (this.getQuant() >= 150 && this.temEntrega == true) return true;
        else return false; 
    }

    public aplicaDesconto(): number {
        let desconto: number = this.getQuant() * 0.3;
        return desconto;
    }
}