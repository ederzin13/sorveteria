import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Client from "../model/Cliente";
import Escola from "../model/Escola";
import Endereco from "../model/Endereco";

export default class ClientScreen {
    private prompt = PromptSync();
    private router!: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    // public registerEscola(): void {
    //     let school: Escola = this.router.schoolController.getNewSchool();
        
    //     let schoolName = this.prompt("Qual o nome da escola?");
    //     school.setName(schoolName);

    //     let schoolPhone = this.prompt("Qual o número de telefone?");
    //     school.setPhone(+schoolPhone);

    //     let schoolCnpj = this.prompt("Qual o CNPJ?");
    //     school.setCnpj(+schoolCnpj);

    //     this.router.schoolController.addNewSchool(school);
    //     console.log("Escola adicionada");
    // }

    public registerPessoa(): void {
        let person: Client = this.router.clientController.getNewPessoa();
        
        let clientName = this.prompt("Qual o nome do cliente?");
        person.setName(clientName.toUpperCase());
        
        this.router.clientController.addNewClient(person);
        console.log("Cliente adicionado");
    }
}