import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Client from "../model/Cliente";
import Pessoa from "../model/Pessoa";
import Escola from "../model/Escola";
import Endereco from "../model/Endereco";

export default class ClientScreen {
    private prompt = PromptSync();
    private router!: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    public registerPessoa(): void {
        let person: Pessoa = this.router.clientController.getNewPessoa();
        
        let clientName = this.prompt("Qual o nome do cliente?");
        person.setName(clientName.toUpperCase());

        let clientPhone = this.prompt("Qual o número de telefone?");
        person.setPhone(+clientPhone);

        let clientCpf = this.prompt("Qual o CPF?");
        person.setCpf(+clientCpf);
        
        this.router.clientController.addNewClient(person);
        console.log("Cliente adicionado");
    }
}