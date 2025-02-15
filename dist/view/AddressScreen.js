"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class AddressScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerAddress() {
        let newAddress = this.router.addressController.getNewAddress();
        let addressRoad = this.prompt("Qual a rua?");
        newAddress.setRua(addressRoad);
        let addressNeighbourhood = this.prompt("Qual o bairro?");
        newAddress.setBairro(addressNeighbourhood);
        let addressNumber = this.prompt("Qual o número?");
        newAddress.setNumero(+addressNumber);
        let addressCep = this.prompt("Qual o CEP?");
        newAddress.setCep(+addressCep);
        this.router.addressController.addNewAddress(newAddress);
        console.log("Endereço adicionado!\n---------");
    }
}
exports.default = AddressScreen;
