import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Escola from "../model/Escola";

export default class SchoolScreen {
    private prompt = PromptSync();
    private router!: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    public registerSchool(): void {
        let school: Escola = this.router.schoolController.getNewSchool();
        
        let schoolName: string = this.prompt("Qual o nome da escola?");
        school.setName(schoolName);
        
        let cnpj: string = this.prompt("Qual o CNPJ?");
        school.setCnpj(parseInt(cnpj));
        
        this.router.schoolController.addNewSchool(school);
        console.log("Escola adicionada");
    }
}