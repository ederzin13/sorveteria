"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Escola_1 = __importDefault(require("../model/Escola"));
class SchoolControler {
    constructor(db) {
        this.db = db;
    }
    getNewSchool() {
        return new Escola_1.default;
    }
    addNewSchool(school) {
        this.db.addSchool(school);
    }
    listSchools() {
        this.db.listSchools();
    }
}
exports.default = SchoolControler;
