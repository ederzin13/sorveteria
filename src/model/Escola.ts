import Client from "./Cliente";
import Endereco from "./Endereco";

export default class Escola extends Client {
    private cnpj!: number;
    private endereco!: Endereco;

    public getCnpj(): number {
        return this.cnpj;
    }

    public setCnpj(cnpj: number): void {
        this.cnpj = cnpj;
    }

    public getAddress(): object {
        return this.endereco;
    }

    public setAddress(address: Endereco): void {
        this.endereco = address;
    }

    encomenda(quantSorvetes: number): void {
        console.log(`Escola ${this.name} encomendou ${quantSorvetes} sorvetes!`);
    }
}