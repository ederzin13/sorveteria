"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_1 = __importDefault(require("../model/Endereco"));
class AddressChontroller {
    constructor(db) {
        this.db = db;
    }
    getNewAddress() {
        return new Endereco_1.default();
    }
    addNewAddress(address) {
        this.db.addAddress(address);
    }
    listAddresses() {
        this.db.listAddresses();
    }
}
exports.default = AddressChontroller;
