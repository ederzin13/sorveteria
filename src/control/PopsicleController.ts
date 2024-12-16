//Classe usada para colocar os picolés no banco de dados 

import Database from "../db/Database";

export default class PopsicleController {
    private db!: Database;

    public constructor(db: Database) {
        this.db = db;
    }
}