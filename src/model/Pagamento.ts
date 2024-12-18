import ErroPagamento from "../exceptions/ErroPagamento";

export default class Pagamento {
    private tipoPagamento: number;

    public constructor(tipoPagamento: number) {
        this.tipoPagamento = tipoPagamento;
        console.log(this.tipoPagamento);
        this.qualTipo(tipoPagamento);
    }

    public qualTipo(tipoPagamento: number) {
        try {
            if (tipoPagamento == 1 || tipoPagamento == 2 || tipoPagamento == 3) {
                console.log("Tipo de pagamento válido!");
            } else {
                let erro: ErroPagamento = new ErroPagamento();
                throw erro.getMessage();
            }
        } catch (erro: any) {
            console.error(`Ocorreu um erro: ${erro}`); 
        } 
    }
}

// export default class Pagamento {
//     private tipoPagamento!: "dinheiro" | "cartão" | "pix";

//     public constructor(tipoPagamento: "dinheiro" | "cartão" | "pix") {
//         this.tipoPagamento = tipoPagamento;
//     }

//     public getTipo(): "dinheiro" | "cartão" | "pix"{
//         return this.tipoPagamento;
//     }

//     public setTipo("dinheiro" | "cartão" | "pix"): void {
//         this.tipoPagamento = idTipo;
//     }

//     public qualTipo(idTipo: "dinheiro" | "cartão" | "pix") {
//         idTipo: this.tipoPagamento;

        // switch(idTipo) {
        //     case 1: this.tipoPagamento = idTipo;
        //     break;

        //     case 2: this.tipoPagamento = idTipo;
        //     break;

        //     case 3: this.tipoPagamento = idTipo;
        //     break;

        //     default: return; 
        // }
//     }