import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Pedido from "../model/Pedido";
import Database from "../db/Database";
import Client from "../model/Cliente";

export default class PedidoScreen {
    private prompt = PromptSync();
    private router!: Router;
    private db: Database = new Database();
    private pedido!: Pedido;

    public constructor(router: Router) {
        this.router = router;
    }

    public registerPedido(): void {
        let newPedido: Pedido = this.router.pedidoController.getNewPedido();
        this.pedido = newPedido;

        let idPedido: string = this.prompt("Id do pedido");
        newPedido.setId(+idPedido);
        
        let quantItens: string = this.prompt("Quantos itens tem o pedido?");
        newPedido.setQuant(+quantItens);

        console.log(`O valor do pedido ficou R$${this.calculaTotal()}\n`);
    }

    public calculaTotal(): number {
        let valor: number = 1.5;

        let total: number = (this.pedido.getQuant() * valor);

        return total;
    }
}