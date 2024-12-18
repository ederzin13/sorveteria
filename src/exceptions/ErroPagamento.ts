export default class ErroPagamento {
    private message: string;

    public constructor(message: string = "Tipo de pagamento inválido! Escolha entre: 1, 2, 3.") {
        this.message = message;
    }

    public getMessage(): string {
        return this.message;
    }
}