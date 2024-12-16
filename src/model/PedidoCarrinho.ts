import Pedido from "./Pedido";

export default class PedidoCarrinho extends Pedido {
    private temEntrega!: boolean;
    private readonly FRETE: number = 40;

    public somaFrete(): number {
        let total: number = this.getSubTotal() + this.FRETE;
        return total;
    }
}