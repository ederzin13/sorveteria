export default class ErroPagamento {
    private message: string;
    private tipoPagamento: number;

    public constructor(message: string = "Pai dos erros", tipo: number = 1) {
        this.message = message;
        this.tipoPagamento = tipo;
    }

    // public confereTipo(idTipo: number): number {
    //     let tipo: number = idTipo;

    //     if (tipo == 1 || 2 || 3) {
    //         return tipo;
    //     }
    //     else {
    //         throw new ErroPagamento("Forma de pagamento inválida");
    //     } 
    // }

    // public qualTipo(idTipo: number) {
    //     try {
    //         this.confereTipo(idTipo);
    //     } catch (erro: any) {
    //         console.error("Ocorreu um erro: " + erro.message); 
    //     } finally {
    //         console.log("Deu certo");
    //     }
    // }
}