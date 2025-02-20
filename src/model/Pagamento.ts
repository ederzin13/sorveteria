import ErroPagamento from "../exceptions/ErroPagamento";

export default class Pagamento {
    private tipoPagamento: number;

    public constructor(tipoPagamento: number) {
        this.tipoPagamento = tipoPagamento;
        console.log(this.tipoPagamento);
        this.qualTipo(tipoPagamento);
    }

    public qualTipo(tipoPagamento: number) {
            if (tipoPagamento == 1 || tipoPagamento == 2 || tipoPagamento == 3) {
                console.log("Tipo de pagamento válido!");
            } else {
                throw new ErroPagamento("Tipo de pagamento inválido");
            }
    }
}

