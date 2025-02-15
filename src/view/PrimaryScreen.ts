import PromptSync from "prompt-sync";
import Router from "../control/Router";
import ClientScreen from "./ClientScreen";
import SchoolScreen from "./SchoolScreen";
import AddressScreen from "./AddressScreen";
import PedidoScreen from "./PedidoScreen";

export default class PrimaryScreen {
    private prompt = PromptSync();
    private router!: Router;
    private clientScreen!: ClientScreen;
    private schoolScreen!: SchoolScreen;
    private addressScreen!: AddressScreen;
    private pedidoScreen!: PedidoScreen;

    public constructor(router: Router) {
        this.router = router;
        this.clientScreen = new ClientScreen(this.router);
        this.schoolScreen = new SchoolScreen(this.router);
        this.addressScreen = new AddressScreen(this.router);
        this.pedidoScreen = new PedidoScreen(this.router);
        //pra cada tela que existir (arquivos "screen"), adicionar uma instância aqui
    }

    public getFirstScreen(): void {
        let showScreen: boolean = true;

        while(showScreen) {
            let choice = this.prompt("O que quer fazer?\n 1 - Cadastrar\n 2 - Consultar\n 3 - Sair");

            switch(choice) {
                case "1": console.log("CADASTRAR\n-------------\n");
                let choiceCadastro = this.prompt("O que quer cadastrar?\n 1 - Cliente\n 2 - Escola\n 3 - Sorvetes\n 4 - Pedido\n 5 - Endereço\n 6 - Sair");
                
                switch(choiceCadastro) {
                    case "1": console.log("registrando cliente\n----------------------\n");
                    this.clientScreen.registerPessoa();
                    break;

                    case "2": console.log("Registrando escola\n--------------------\n");
                    this.schoolScreen.registerSchool();
                    break;

                    case "3": console.log("Cadastro de sorvetes\n--------------------\n");
                    break;

                    case "4": console.log("Novo pedido\n--------------------\n");
                    this.pedidoScreen.registerPedido();
                    break;

                    case "5": console.log("Registrando endereço\n--------------------\n");
                    this.addressScreen.registerAddress();
                    break;

                    case "6": showScreen = false;

                    default: console.log("Inválido");
                    break;
                }
                break;
    
                case "2": console.log("CONSULTAR\n-------------\n");
                let choiceConsulta = this.prompt("O que quer consultar?\n 1 - Clientes\n 2 - Escolas\n 3 - Pedidos\n 4 - Endereços\n 5 - Sair");

                switch(choiceConsulta) {
                    case "1": console.log("Consulta de clientes\n------------------\n");
                    this.router.clientController.listClients();
                    break;

                    case "2": console.log("Consulta de escolas\n---------------------\n");
                    this.router.schoolController.listSchools();
                    break;

                    case "3": console.log("Consulta de pedidos\n---------------------\n");
                    this.router.pedidoController.listPedidos();
                    break;

                    case "4": console.log("Consulta de endereços\n-------------------\n");
                    this.router.addressController.listAddresses();
                    break;

                    case "5": showScreen = false;
                    break;

                    default: console.log("Inválido");
                    break;
                }
                break;
    
                case "3": console.log("SAIR\n-------------\n");
                showScreen = false;
                break;
    
                default: console.log("inválido");
                break;
            }
        }
    }
}