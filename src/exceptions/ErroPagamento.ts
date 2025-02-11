export default class ErroPagamento extends Error {
    //private message: string;

    public constructor(message: string) {
        //this.message = message;
        super(message);
    }

    public getMessage(): string {
        return this.message;
    }
}