export default interface ISorveteGen<T, U> {
    tipo: T;
    sabor: string;
    quantidade: T | U;
    valor: number;
}
