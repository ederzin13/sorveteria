import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Pedido from "../model/Pedido";
import Database from "../db/Database";
import Client from "../model/Cliente";

export default class PedidoScreen {
    private prompt = PromptSync();
    private router!: Router;
    private db: Database = new Database();

    public constructor(router: Router) {
        this.router = router;
    }

    public registerPedido(): void {
        let pedido: Pedido = this.router.pedidoController.getNewPedido();

        let idPedido: string = this.prompt("Id do pedido");
        let idConvertido: number = +idPedido;
        pedido.setId(idConvertido);

        //let cliente: Client = this.router.clientController.getNewPessoa();
        let cliente: Client;
        let novoPedido = this.router.pedidoController.addNewPedido(pedido);
    }
}