import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Client from "../model/Cliente";

export default class ClientScreen {
    private prompt = PromptSync();
    private router!: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    public registerClient(): void {
        let cliente: Client = this.router.clientController.getNewPessoa();
        
        let clientName = this.prompt("Qual o nome do cliente?");
        cliente.setName(clientName);
        
        this.router.clientController.addNewClient(cliente);
        console.log("Cliente adicionado");
    }
}