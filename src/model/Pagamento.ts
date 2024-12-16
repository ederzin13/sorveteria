export default class Pagamento {
    private tipoPagamento!: "dinheiro" | "cartao" | "pix";

    public constructor(tipoPagamento: "dinheiro" | "cartao" | "pix") {
        this.tipoPagamento = tipoPagamento;
    }

    public getTipo(): "dinheiro" | "cartao" | "pix" {
        return this.tipoPagamento;
    }

    public setTipo(idTipo: "dinheiro" | "cartao" | "pix"): void {
        this.tipoPagamento = idTipo;
    }

    public qualTipo(idTipo: "dinheiro" | "cartao" | "pix") {
        idTipo: this.tipoPagamento;

        switch(idTipo) {
            case "dinheiro": this.tipoPagamento = idTipo;
            break;

            case "cartao": this.tipoPagamento = idTipo;
            break;

            case "pix": this.tipoPagamento = idTipo;
            break;

            default: return; //tratamento de erro aqui?
        }
    }

    
}