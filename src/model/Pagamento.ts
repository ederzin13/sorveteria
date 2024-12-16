export default class Pagamento {
    private tipoPagamento!: number;

    public constructor(tipoPagamento: number) {
        this.tipoPagamento = tipoPagamento;
    }

    public getTipo(): number {
        return this.tipoPagamento;
    }

    public setTipo(idTipo: number): void {
        this.tipoPagamento = idTipo;
    }

    public confereTipo(idTipo: number): number {
        let tipo: number = idTipo;

        if (tipo == 1 || 2 || 3) {
            return tipo;
        }
        else {
            throw new Error("Forma de pagamento inválida");
        } 
    }

    public qualTipo(idTipo: number) {
        //let confere: number = this.confereTipo(idTipo);

        try {
            this.confereTipo(idTipo);
        } catch (error: any) {
            console.error("Ocorreu um erro: " + error.message); 
        } finally {
            console.log("Deu certo");
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

//         switch(idTipo) {
//             case 1: this.tipoPagamento = idTipo;
//             break;

//             case 2: this.tipoPagamento = idTipo;
//             break;

//             case 3: this.tipoPagamento = idTipo;
//             break;

//             default: return; 
//         }
//     }