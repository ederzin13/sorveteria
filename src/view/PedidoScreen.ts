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
        let newPedido: Pedido = this.router.pedidoController.getNewPedido();

        let idPedido: string = this.prompt("Id do pedido");
        newPedido.setId(+idPedido);
        
        
    }

    public isCliente(): void {

    }
}