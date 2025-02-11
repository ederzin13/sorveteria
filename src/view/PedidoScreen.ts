import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Pedido from "../model/Pedido";

export default class PedidoScreen {
    private prompt = PromptSync();
    private router!: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    public registerPedido(): void {
        let pedido: Pedido = this.router.pedidoController.getNewPedido();

        
    }
}