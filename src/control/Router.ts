import Database from "../db/Database";
import PrimaryScreen from "../view/PrimaryScreen";
import AddressChontroller from "./AddressController";
import ClientController from "./ClientController";
import PedidoController from "./PedidoController";
import SchoolControler from "./SchoolController";


export default class Router {
    private ps: PrimaryScreen = new PrimaryScreen(this);
    private db: Database = new Database();
    public clientController: ClientController = new ClientController(this.db);
    public schoolController: SchoolControler = new SchoolControler(this.db);
    public pedidoController: PedidoController = new PedidoController(this.db);
    public addressController: AddressChontroller = new AddressChontroller(this.db);

    public constructor() {
        this.ps.getFirstScreen();
    }
}