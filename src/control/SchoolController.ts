import Database from "../db/Database";
import Escola from "../model/Escola";

export default class SchoolControler {
    private db!: Database;

    public constructor(db: Database) {
        this.db = db;
    }

    public getNewSchool(): Escola {
        return new Escola;
    }

    public addNewSchool(school: Escola): void {
        this.db.addSchool(school);
    }

    public listSchools(): void {
        this.db.listSchools();
    }
}