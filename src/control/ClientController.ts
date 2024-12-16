import Database from "../db/Database";
import Client from "../model/Cliente";
import Pessoa from "../model/Pessoa";

export default class ClientController {
    private db!: Database;

    public constructor(db: Database) {
        this.db = db;
    }

    // public getNewClient(): Client {
    //     return new Client(); 
    // }

    public getNewPessoa(): Pessoa {
        return new Pessoa();
    }

    public addNewClient(client: Client) {
        this.db.addClient(client);
    }

    public listClients() {
        this.db.listClients();
    }
}