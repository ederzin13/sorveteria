import Endereco from "./Endereco";

export default abstract class Client {
    protected name!: string | undefined;
    protected phoneNumber!: number | undefined;
    protected address!: Endereco;

    public constructor(name?: string, phone?: number) {
        this.name = name;
        this.phoneNumber = phone;
    }

    public getName(): string | undefined{
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPhone(): number | undefined{
        return this.phoneNumber;
    }

    public setPhone(phoneNumber: number): void {
        this.phoneNumber = phoneNumber;
    }

    public getAddress(): object {
        return this.address;
    }

    public setAddress(address: Endereco): void {
        this.address = address;
    }

    abstract encomenda(quantSorvetes: number): void;
}
