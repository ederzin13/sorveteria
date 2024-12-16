import Database from "../db/Database";
import Pedido from "../model/Pedido";

export default class PedidoController {
    private db!: Database;

    public constructor(db: Database) {
        this.db = db;
    }

    public getNewPedido(): Pedido {
        return new Pedido();
    }

    public addNewPedido(pedido: Pedido): void {
        this.db.addPedido(pedido);
    }

    public listPedidos(): void {
        this.db.listPedidos();
    }
}