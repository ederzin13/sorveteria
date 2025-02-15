"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ClientScreen_1 = __importDefault(require("./ClientScreen"));
const SchoolScreen_1 = __importDefault(require("./SchoolScreen"));
const AddressScreen_1 = __importDefault(require("./AddressScreen"));
const PedidoScreen_1 = __importDefault(require("./PedidoScreen"));
class PrimaryScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
        this.clientScreen = new ClientScreen_1.default(this.router);
        this.schoolScreen = new SchoolScreen_1.default(this.router);
        this.addressScreen = new AddressScreen_1.default(this.router);
        this.pedidoScreen = new PedidoScreen_1.default(this.router);
        //pra cada tela que existir (arquivos "screen"), adicionar uma instância aqui
    }
    getFirstScreen() {
        let showScreen = true;
        while (showScreen) {
            let choice = this.prompt("O que quer fazer?\n 1 - Cadastrar\n 2 - Consultar\n 3 - Sair");
            switch (choice) {
                case "1":
                    console.log("CADASTRAR\n-------------\n");
                    let choiceCadastro = this.prompt("O que quer cadastrar?\n 1 - Cliente\n 2 - Escola\n 3 - Sorvetes\n 4 - Pedido\n 5 - Endereço\n 6 - Sair");
                    switch (choiceCadastro) {
                        case "1":
                            console.log("registrando cliente\n----------------------\n");
                            this.clientScreen.registerPessoa();
                            break;
                        case "2":
                            console.log("Registrando escola\n--------------------\n");
                            this.schoolScreen.registerSchool();
                            break;
                        case "3":
                            console.log("Cadastro de sorvetes\n--------------------\n");
                            break;
                        case "4":
                            console.log("Novo pedido\n--------------------\n");
                            this.pedidoScreen.registerPedido();
                            break;
                        case "5":
                            console.log("Registrando endereço\n--------------------\n");
                            this.addressScreen.registerAddress();
                            break;
                        case "6": showScreen = false;
                        default:
                            console.log("Inválido");
                            break;
                    }
                    break;
                case "2":
                    console.log("CONSULTAR\n-------------\n");
                    let choiceConsulta = this.prompt("O que quer consultar?\n 1 - Clientes\n 2 - Escolas\n 3 - Pedidos\n 4 - Endereços\n 5 - Sair");
                    switch (choiceConsulta) {
                        case "1":
                            console.log("Consulta de clientes\n------------------\n");
                            this.router.clientController.listClients();
                            break;
                        case "2":
                            console.log("Consulta de escolas\n---------------------\n");
                            this.router.schoolController.listSchools();
                            break;
                        case "3":
                            console.log("Consulta de pedidos\n---------------------\n");
                            this.router.pedidoController.listPedidos();
                            break;
                        case "4":
                            console.log("Consulta de endereços\n-------------------\n");
                            this.router.addressController.listAddresses();
                            break;
                        case "5":
                            showScreen = false;
                            break;
                        default:
                            console.log("Inválido");
                            break;
                    }
                    break;
                case "3":
                    console.log("SAIR\n-------------\n");
                    showScreen = false;
                    break;
                default:
                    console.log("inválido");
                    break;
            }
        }
    }
}
exports.default = PrimaryScreen;
