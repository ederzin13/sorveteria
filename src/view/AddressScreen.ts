import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Endereco from "../model/Endereco";

export default class AddressScreen {
    private prompt = PromptSync();
    private router: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    public registerAddress(): void {
        let newAddress: Endereco = this.router.addressController.getNewAddress();
        
        let addressRoad = this.prompt("Qual a rua?");
        newAddress.setRua(addressRoad.toUpperCase());

        let addressNeighbourhood = this.prompt("Qual o bairro?");
        newAddress.setBairro(addressNeighbourhood.toUpperCase());

        let addressNumber = this.prompt("Qual o número?");
        newAddress.setNumero(+addressNumber);

        let addressCep = this.prompt("Qual o CEP?");
        newAddress.setCep(+addressCep);

        this.router.addressController.addNewAddress(newAddress);
        console.log("Endereço adicionado!\n---------");
    }
}