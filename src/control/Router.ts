import Database from "../db/Database";
import PrimaryScreen from "../view/PrimaryScreen";
import ClientController from "./ClientController";
import SchoolControler from "./SchoolController";


export default class Router {
    private ps: PrimaryScreen = new PrimaryScreen(this);
    private db: Database = new Database();
    public clientController: ClientController = new ClientController(this.db);
    public schoolController: SchoolControler = new SchoolControler(this.db);

    public constructor() {
        this.ps.getFirstScreen();
    }
}