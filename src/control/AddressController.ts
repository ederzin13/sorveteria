import Database from "../db/Database";
import Endereco from "../model/Endereco";

export default class AddressChontroller {
    private db!: Database;

    public constructor(db: Database) {
        this.db = db;
    }

    public getNewAddress(): Endereco {
        return new Endereco();
    }

    public addNewAddress(address: Endereco): void {
        this.db.addAddress(address);
    }

    public listAddresses(): void {
        this.db.listAddresses();
    }
}