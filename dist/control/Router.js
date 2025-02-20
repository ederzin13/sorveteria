"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const AddressController_1 = __importDefault(require("./AddressController"));
const ClientController_1 = __importDefault(require("./ClientController"));
const PedidoController_1 = __importDefault(require("./PedidoController"));
const SchoolController_1 = __importDefault(require("./SchoolController"));
class Router {
    constructor() {
        this.ps = new PrimaryScreen_1.default(this);
        this.db = new Database_1.default();
        this.clientController = new ClientController_1.default(this.db);
        this.schoolController = new SchoolController_1.default(this.db);
        this.pedidoController = new PedidoController_1.default(this.db);
        this.addressController = new AddressController_1.default(this.db);
        this.ps.getFirstScreen();
    }
}
exports.default = Router;
